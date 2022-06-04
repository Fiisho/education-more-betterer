import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionFourPage } from './stage-six-software-task-one-question-four.page';

describe('StageSixSoftwareTaskOneQuestionFourPage', () => {
  let component: StageSixSoftwareTaskOneQuestionFourPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskOneQuestionFourPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskOneQuestionFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskOneQuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
