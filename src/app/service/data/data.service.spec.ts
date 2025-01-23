import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { USERS } from '../../mock-data/user';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [DataService, 
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    testingController.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(3)
    })
    const mockReq = testingController.expectOne('api/users')
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(USERS))
  })

  it('should get user', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Amanda')
    })
    const mockReq = testingController.expectOne('api/users/1')
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(USERS[1])
  })

  it('should update the user by id', () => {
    let change = {name: 'Nara'}
    let modifiedUser = {id: 1, name: 'Nara'}

    service.updateUser(1, change).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(1)
      expect(user.name).toBe('Nara')
            
    })
    const mockReq = testingController.expectOne('api/users/1')
    expect(mockReq.request.method).toBe('PUT');   
    expect(mockReq.request.body.name).toEqual(change.name)
    mockReq.flush(modifiedUser)

  })
});
