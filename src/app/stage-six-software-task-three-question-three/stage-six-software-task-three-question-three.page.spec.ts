import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeQuestionThreePage } from './stage-six-software-task-three-question-three.page';

describe('StageSixSoftwareTaskThreeQuestionThreePage', () => {
  let component: StageSixSoftwareTaskThreeQuestionThreePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskThreeQuestionThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskThreeQuestionThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskThreeQuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
