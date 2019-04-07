import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLoginComponent } from './chat-login.component';

describe('ChatLoginComponent', () => {
  let component: ChatLoginComponent;
  let fixture: ComponentFixture<ChatLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ChatLoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to doorDash-chatApp!');
  });
});
