import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutusPageComponent } from './aboutus-page.component';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule} from 'ngx-toastr';
import {NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusService } from 'src/app/Services/contactus.service';


describe('AboutusPageComponent', () => {
  let component: AboutusPageComponent;
  let fixture: ComponentFixture<AboutusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      declarations: [ AboutusPageComponent ],
      providers:[ToastrService,ContactusService ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
