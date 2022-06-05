import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionThreePage } from './stage-six-software-task-two-question-three.page';

describe('StageSixSoftwareTaskTwoQuestionThreePage', () => {
  let component: StageSixSoftwareTaskTwoQuestionThreePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskTwoQuestionThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskTwoQuestionThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskTwoQuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
