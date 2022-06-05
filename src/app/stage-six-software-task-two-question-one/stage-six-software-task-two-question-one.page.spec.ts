import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionOnePage } from './stage-six-software-task-two-question-one.page';

describe('StageSixSoftwareTaskTwoQuestionOnePage', () => {
  let component: StageSixSoftwareTaskTwoQuestionOnePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskTwoQuestionOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskTwoQuestionOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskTwoQuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
