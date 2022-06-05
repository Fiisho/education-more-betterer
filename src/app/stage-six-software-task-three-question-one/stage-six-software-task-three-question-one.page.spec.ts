import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionOnePage } from './stage-six-software-task-three-question-one.page';

describe('StageSixSoftwareTaskThreeQuestionOnePage', () => {
  let component: StageSixSoftwareTaskThreeQuestionOnePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskThreeQuestionOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskThreeQuestionOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskThreeQuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
