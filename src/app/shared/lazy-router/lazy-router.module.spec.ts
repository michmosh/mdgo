import { LazyRouterModule } from './lazy-router.module';

describe('LazyRouterModule', () => {
  let lazyRouterModule: LazyRouterModule;

  beforeEach(() => {
    lazyRouterModule = new LazyRouterModule();
  });

  it('should create an instance', () => {
    expect(lazyRouterModule).toBeTruthy();
  });
});
