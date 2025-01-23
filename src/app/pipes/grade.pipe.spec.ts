import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });


  it('shoud assign B grade when mark mark between 90 and 80', () =>{
    const pipe = new GradePipe();
    let grade = pipe.transform(84)
    expect(grade).toBe('B');
  })
});
