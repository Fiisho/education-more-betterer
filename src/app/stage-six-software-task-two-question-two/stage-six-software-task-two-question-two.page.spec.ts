import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskTwoQuestionTwoPage } from './stage-six-software-task-two-question-two.page';

describe('StageSixSoftwareTaskTwoQuestionTwoPage', () => {
  let component: StageSixSoftwareTaskTwoQuestionTwoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskTwoQuestionTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskTwoQuestionTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskTwoQuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
