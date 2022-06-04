import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskOneQuestionOnePage } from './stage-six-software-task-one-question-one.page';

describe('StageSixSoftwareTaskOneQuestionOnePage', () => {
  let component: StageSixSoftwareTaskOneQuestionOnePage;
  let fixture: ComponentFixture<StageSixSoftwareTaskOneQuestionOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskOneQuestionOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskOneQuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
