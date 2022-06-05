import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoInfoPage } from './stage-six-software-task-two-info.page';

describe('StageSixSoftwareTaskTwoInfoPage', () => {
  let component: StageSixSoftwareTaskTwoInfoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskTwoInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskTwoInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskTwoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
