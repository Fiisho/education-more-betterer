import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionFourPage } from './stage-six-software-task-two-question-four.page';

describe('StageSixSoftwareTaskTwoQuestionFourPage', () => {
  let component: StageSixSoftwareTaskTwoQuestionFourPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskTwoQuestionFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskTwoQuestionFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskTwoQuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
