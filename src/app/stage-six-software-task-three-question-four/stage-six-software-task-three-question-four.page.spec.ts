import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionFourPage } from './stage-six-software-task-three-question-four.page';

describe('StageSixSoftwareTaskThreeQuestionFourPage', () => {
  let component: StageSixSoftwareTaskThreeQuestionFourPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskThreeQuestionFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskThreeQuestionFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskThreeQuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
