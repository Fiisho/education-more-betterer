import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StageSixSoftwareTaskThreeInfoPage } from './stage-six-software-task-three-info.page';

describe('StageSixSoftwareTaskThreeInfoPage', () => {
  let component: StageSixSoftwareTaskThreeInfoPage;
  let fixture: ComponentFixture<StageSixSoftwareTaskThreeInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSixSoftwareTaskThreeInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StageSixSoftwareTaskThreeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
