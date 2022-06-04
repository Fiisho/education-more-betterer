import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionThreePage } from './stage-six-software-task-one-question-three.page';

describe('StageSixSoftwareTaskOneQuestionThreePage', () => {
  let component: StageSixSoftwareTaskOneQuestionThreePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskOneQuestionThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskOneQuestionThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskOneQuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
