import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionTwoPage } from './stage-six-software-task-three-question-two.page';

describe('StageSixSoftwareTaskThreeQuestionTwoPage', () => {
  let component: StageSixSoftwareTaskThreeQuestionTwoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskThreeQuestionTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskThreeQuestionTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskThreeQuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
