import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactusService } from './contactus.service';

describe('ContactusService', () => {
  let httpClient: HttpClient;
  let service: ContactusService;
  let httpMock: HttpTestingController;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactusService);
    httpMock = TestBed.get(HttpClientTestingModule);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
