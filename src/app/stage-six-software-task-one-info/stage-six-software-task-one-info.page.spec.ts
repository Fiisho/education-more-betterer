import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneInfoPage } from './stage-six-software-task-one-info.page';

describe('StageSixSoftwareTaskOneInfoPage', () => {
  let component: StageSixSoftwareTaskOneInfoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskOneInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskOneInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskOneInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
