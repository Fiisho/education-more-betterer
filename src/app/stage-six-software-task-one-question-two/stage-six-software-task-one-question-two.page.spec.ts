import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionTwoPage } from './stage-six-software-task-one-question-two.page';

describe('StageSixSoftwareTaskOneQuestionTwoPage', () => {
  let component: StageSixSoftwareTaskOneQuestionTwoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskOneQuestionTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskOneQuestionTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskOneQuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
