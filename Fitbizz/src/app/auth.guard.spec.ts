import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
   let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
    });
    guard = TestBed.inject(AuthGuard);
    httpMock = TestBed.get(HttpClientTestingModule);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
