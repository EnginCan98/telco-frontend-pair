import { FirstNameFilterPipe } from './first-name-filter.pipe';

describe('FirstNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
