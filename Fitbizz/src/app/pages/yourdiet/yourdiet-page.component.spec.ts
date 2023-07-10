import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YourdietPageComponent } from './yourdiet-page.component';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule} from 'ngx-toastr';
import {NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('YourdietPageComponent', () => {
  let component: YourdietPageComponent;
  let fixture: ComponentFixture<YourdietPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      declarations: [ YourdietPageComponent ],
      providers:[ToastrService ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourdietPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
