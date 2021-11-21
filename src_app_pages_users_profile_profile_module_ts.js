(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_profile_profile_module_ts"],{

/***/ 9816:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/profile/profile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6178);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4628:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 9816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6178);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6178:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 6130);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 5686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);







let ProfilePage = class ProfilePage {
    constructor(_activatedRoute, _userService, _alertService) {
        this._activatedRoute = _activatedRoute;
        this._userService = _userService;
        this._alertService = _alertService;
        this.dataLoaded = false;
    }
    ngOnInit() {
        this.user_id = this._activatedRoute.snapshot.params['user_id'];
        this.getUserProfile();
    }
    getUserProfile() {
        this._userService.getProfileById(this.user_id).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.profile = yield data;
            this.dataLoaded = true;
            this.calculate();
            this.getGithubProfile();
        }));
    }
    getGithubProfile() {
        let githubusername = this.profile.githubusername;
        this._userService.getGithubProfile(githubusername).subscribe(data => {
            if (data !== null) {
                this.githubRepo = data;
            }
        });
    }
    calculateMonth(month) {
        let months = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec',
        };
        return months[month];
    }
    calculate() {
        this.profile.education.forEach(element => {
            let from = this.calculateMonth(element.from.toString().split('-')[1]) + ' ' + element.from.toString().split('-')[0];
            if (element.current == false) {
                let to = this.calculateMonth(element.to.toString().split('-')[1]) + ' ' + element.to.toString().split('-')[0];
                element['year'] = from + ' - ' + to;
            }
            else {
                element['year'] = from + ' Current';
            }
        });
        this.profile.experience.forEach(element => {
            let from = this.calculateMonth(element.from.toString().split('-')[1]) + ' ' + element.from.toString().split('-')[0];
            if (element.current == false) {
                let to = this.calculateMonth(element.to.toString().split('-')[1]) + ' ' + element.to.toString().split('-')[0];
                element['year'] = from + ' - ' + to;
            }
            else {
                element['year'] = from + ' Current';
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 5686:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  --color: #013a63;\n  --background-hover:#01497c;\n  --background-hover-opacity: 0.05;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  position: absolute;\n  top: 46%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container .section {\n  width: 100%;\n  max-width: 1100px;\n}\n\n.container .section #logo-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 70vh;\n  background: #013a63;\n  margin: 1rem 0;\n}\n\n.container .section #logo-links img {\n  height: auto;\n  width: 200px;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n}\n\n.container .section #logo-links h1 {\n  color: #fff;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.container .section #logo-links h2 {\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.container .section #logo-links p {\n  font-size: 1rem;\n  color: #fff;\n}\n\n.container .section #logo-links #links {\n  margin-top: 1rem;\n}\n\n.container .section #logo-links #links a {\n  padding: 0 0.2rem;\n  text-decoration: none;\n}\n\n.container .section #logo-links #links a ion-icon {\n  font-size: 1.5rem;\n  color: #fff;\n}\n\n.container .section #bio-skills {\n  padding: 1rem;\n}\n\n.container .section #bio-skills #bio {\n  margin: 1rem 0;\n}\n\n.container .section #bio-skills #bio h1 {\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: center;\n  color: #01497c;\n  margin-bottom: 0.5rem;\n}\n\n.container .section #bio-skills #bio p {\n  font-size: 1rem;\n  text-align: center;\n}\n\n.container .section #bio-skills .seperator {\n  width: 100%;\n  border: 0.1px solid rgba(0, 0, 0, 0.3);\n}\n\n.container .section #bio-skills #skills {\n  margin: 1rem 0;\n}\n\n.container .section #bio-skills #skills h1 {\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: center;\n  color: #01497c;\n}\n\n.container .section #bio-skills #skills #skill {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.container .section #bio-skills #skills #skill div {\n  text-align: center;\n  padding: 0 0.1rem;\n}\n\n.container .section #experience-education {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  margin: 1rem 0;\n}\n\n.container .section #experience-education #experience, .container .section #experience-education #education {\n  padding: 1.5rem;\n}\n\n.container .section #experience-education #experience ion-card-header, .container .section #experience-education #education ion-card-header {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #01497c;\n  margin: 1rem 0;\n}\n\n.container .section #experience-education #experience ion-card-content, .container .section #experience-education #education ion-card-content {\n  margin: 0.6rem 0;\n}\n\n.container .section #experience-education #experience ion-card-content .experience-education-item-header, .container .section #experience-education #education ion-card-content .experience-education-item-header {\n  display: flex;\n  flex-direction: column;\n}\n\n.container .section #experience-education #experience ion-card-content .experience-education-item-header h1, .container .section #experience-education #education ion-card-content .experience-education-item-header h1 {\n  font-size: 1.4rem;\n  margin: 0.4rem 0;\n  font-weight: 540;\n  color: #000;\n}\n\n.container .section #experience-education #experience ion-card-content .experience-education-item-desc P span, .container .section #experience-education #education ion-card-content .experience-education-item-desc P span {\n  padding-right: 0.2rem;\n  font-size: 1.1rem;\n  margin: 0.4rem 0;\n  font-weight: 450;\n  color: #000;\n}\n\n.container .section #experience-education #experience ion-card-content .seperator, .container .section #experience-education #education ion-card-content .seperator {\n  width: 100%;\n  margin-top: 0.5rem;\n  border: 0.1px solid rgba(15, 9, 9, 0.15);\n}\n\n.container .section #github-name {\n  margin-bottom: 1rem;\n}\n\n.container .section #github-name h1 {\n  font-size: 1.5rem;\n  color: #01497c;\n  font-weight: 600;\n}\n\n.container .section #github-repos {\n  margin: 0.5rem 0;\n  padding: 1rem;\n}\n\n.container .section #github-repos ion-card-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.container .section #github-repos ion-card-content #repo-desc a {\n  font-size: 1.3rem;\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  font-weight: 400;\n  color: #01497c;\n}\n\n.container .section #github-repos ion-card-content #repo-desc p {\n  margin-top: 0.3rem;\n}\n\n.container .section #github-repos ion-card-content #repo-status {\n  margin-left: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 0.2rem;\n  justify-content: flex-end;\n}\n\n.container .section #github-repos ion-card-content #repo-status ion-button {\n  font-size: 0.8rem;\n  --background:#014f86;\n}\n\n.container .section #github-repos ion-card-content #repo-status ion-button span {\n  margin-left: 0.3rem;\n}\n\n@media (max-width: 768px) {\n  .container .section #bio-skills #skills #skill {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n@media (max-width: 480px) {\n  .container .section #logo-links h1 {\n    font-size: 2rem;\n  }\n  .container .section #logo-links h2 {\n    font-size: 1.5rem;\n  }\n  .container .section #logo-links p {\n    font-size: 1rem;\n  }\n  .container .section #logo-links #links a ion-icon {\n    font-size: 1.5rem;\n  }\n  .container .section #bio-skills #bio h1 {\n    font-size: 1.5rem;\n  }\n  .container .section #bio-skills #bio p {\n    font-size: 1rem;\n  }\n  .container .section #bio-skills #skills #skill {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .container .section #bio-skills #skills h1 {\n    font-size: 1.5rem;\n  }\n  .container .section #experience-education {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #experience-education #experience ion-card-header, .container .section #experience-education #education ion-card-header {\n    font-size: 1.3rem;\n  }\n  .container .section #experience-education #experience ion-card-content, .container .section #experience-education #education ion-card-content {\n    margin: 0.6rem 0;\n  }\n  .container .section #experience-education #experience ion-card-content .experience-education-item-header h1, .container .section #experience-education #education ion-card-content .experience-education-item-header h1 {\n    font-size: 1.2rem;\n  }\n  .container .section #experience-education #experience ion-card-content .experience-education-item-desc P span, .container .section #experience-education #education ion-card-content .experience-education-item-desc P span {\n    font-size: 1rem;\n  }\n  .container .section #github-name {\n    margin-bottom: 1rem;\n    margin-left: 0.5rem;\n  }\n  .container .section #github-name h1 {\n    font-size: 1.5rem;\n  }\n  .container .section #github-repos ion-card-content #repo-desc a {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0VBcENOO0VBd0NRO0lBQ0ksaUJBQUE7RUF0Q1o7RUE2Q1E7SUFDRSxpQkFBQTtFQTNDVjtFQTZDUTtJQUNFLGVBQUE7RUEzQ1Y7RUErQ1E7SUFDRSxxQ0FBQTtFQTdDVjtFQStDUTtJQUNFLGlCQUFBO0VBN0NWO0VBaURJO0lBQ0UscUNBQUE7RUEvQ047RUFpRFE7SUFDRSxpQkFBQTtFQS9DVjtFQWlEUTtJQUNFLGdCQUFBO0VBL0NWO0VBaURZO0lBQ0UsaUJBQUE7RUEvQ2Q7RUFvRGM7SUFDRSxlQUFBO0VBbERoQjtFQTBESTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUF4RE47RUF5RE07SUFDRSxpQkFBQTtFQXZEUjtFQThEVTtJQUNFLGlCQUFBO0VBNURaO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogIzAxM2E2MztcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IzAxNDk3YztcclxuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4wNTtcclxufVxyXG5cclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkaW5ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ2JTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgdHJhbnNsYXRlOiAoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgXHJcbiAgICAjbG9nby1saW5rc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMTNhNjM7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICBcclxuICAgIGltZ3tcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMXtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMntcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2xpbmtze1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBhe1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC4ycmVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjYmlvLXNraWxsc3tcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgI2Jpb3tcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjojMDE0OTdjO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXBlcmF0b3J7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNza2lsbHN7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IzAxNDk3YztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNza2lsbHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2V4cGVyaWVuY2UtZWR1Y2F0aW9ue1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgIGdyaWQtZ2FwOjFyZW07XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG5cclxuICAgICAgI2V4cGVyaWVuY2UsICNlZHVjYXRpb257XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMDE0OTdjO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNnJlbSAwO1xyXG4gICAgICAgICAgLmV4cGVyaWVuY2UtZWR1Y2F0aW9uLWl0ZW0taGVhZGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmV4cGVyaWVuY2UtZWR1Y2F0aW9uLWl0ZW0tZGVzY3tcclxuICAgICAgICAgICAgUHtcclxuICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VwZXJhdG9ye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHJnYmEoMTUsIDksIDksIDAuMTUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNnaXRodWItbmFtZXtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICMwMTQ5N2M7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNnaXRodWItcmVwb3N7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAjcmVwby1kZXNje1xyXG4gICAgICAgICAgYXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjojMDE0OTdjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3JlcG8tc3RhdHVze1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICBncmlkLWdhcDogMC4ycmVtO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IzAxNGY4NjtcclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICNiaW8tc2tpbGxze1xyXG4gICAgICAgICAjc2tpbGxze1xyXG4gICAgICAgICAgICNza2lsbHtcclxuICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpe1xyXG4gLmNvbnRhaW5lcntcclxuICAgLnNlY3Rpb257XHJcbiAgICAjbG9nby1saW5rc3sgICAgICBcclxuICAgICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgICNsaW5rc3tcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI2Jpby1za2lsbHN7XHJcbiAgICAgICAgI2Jpb3tcclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI3NraWxsc3tcclxuICAgICAgICAgICNza2lsbHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI2V4cGVyaWVuY2UtZWR1Y2F0aW9ue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcclxuICAgICAgICAjZXhwZXJpZW5jZSwgI2VkdWNhdGlvbntcclxuICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNnJlbSAwO1xyXG4gICAgICAgICAgICAuZXhwZXJpZW5jZS1lZHVjYXRpb24taXRlbS1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4cGVyaWVuY2UtZWR1Y2F0aW9uLWl0ZW0tZGVzY3tcclxuICAgICAgICAgICAgICBQe1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAjZ2l0aHViLW5hbWV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNnaXRodWItcmVwb3N7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICNyZXBvLWRlc2N7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 6130:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/profile/profile.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"developers\" text=\"Back\"\n      icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"!dataLoaded\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\" *ngIf=\"dataLoaded\">\n    <div class=\"section\">\n      <div id=\"logo-links\">\n        <img [src]=\"profile.user.avatar\" *ngIf=\"profile.user.avatar\" alt=\"\">\n        <h1 *ngIf=\"profile.user.name\">{{profile.user.name}}</h1>\n        <h2>{{profile.status}}</h2>\n        <p *ngIf=\"profile.location\">{{profile.location}}</p>\n        <div id=\"links\" *ngIf=\"profile.social\">\n          <a [href]=\"profile.website\" *ngIf=\"profile.website\"  target=\"_blank\">\n            <ion-icon name=\"earth-outline\"></ion-icon>\n          </a>\n          <a *ngIf=\"profile.social.instagram\" [href]=\"profile.social.instagram\" target=\"_blank\">\n            <ion-icon name=\"logo-instagram\"></ion-icon>\n          </a>\n          <a [href]=\"profile.social.twitter\" *ngIf=\"profile.social.twitter\"  target=\"_blank\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n          </a>\n          <a [href]=\"profile.social.linkedin\" *ngIf=\"profile.social.linkedin\" target=\"_blank\">\n            <ion-icon name=\"logo-linkedin\"></ion-icon>\n          </a>\n          <a [href]=\"profile.social.youtube\" *ngIf=\"profile.social.youtube\" target=\"_blank\">\n            <ion-icon name=\"logo-youtube\"></ion-icon>\n          </a>\n          <a [href]=\"profile.social.facebook\" *ngIf=\"profile.social.facebook\" target=\"_blank\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </a>\n        </div>\n      </div>\n\n\n      <ion-card id=\"bio-skills\">\n        <ion-card-content id=\"bio\" *ngIf=\"profile.bio\">\n          <h1>{{profile.user.name}}'s Bio</h1>\n          <p>{{profile.bio}}</p>\n        </ion-card-content>\n\n        <p class=\"seperator\" *ngIf=\"profile.bio\"></p>\n\n        <ion-card-content id=\"skills\" *ngIf=\"profile.skills.length>0\">\n          <h1>Skill Set</h1>\n          <div id=\"skill\">\n            <div *ngFor=\"let skill of profile.skills\">\n              <ion-icon></ion-icon>\n              <p>{{skill}}</p>\n            </div>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n\n      <div id=\"experience-education\">\n        <ion-card id=\"experience\" *ngIf=\"profile.experience.length>0\">\n          <ion-card-header>\n            Experience\n          </ion-card-header>\n          <ion-card-content *ngFor=\"let exp of profile.experience\">\n            <div class=\"experience-education-item-header\">\n              <h1>{{exp.company}}</h1>\n              <p>{{exp.year}}</p>\n            </div>\n\n            <div class=\"experience-education-item-desc\">\n              <p><span>Position:</span>{{exp.title}}</p>\n            </div>\n            \n            <div class=\"experience-education-item-desc\">\n              <p><span>Description:</span>{{exp.description}}</p>\n            </div>\n            <p class=\"seperator\"></p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card id=\"education\" *ngIf=\"profile.education.length>0\">\n          <ion-card-header>\n            Education \n          </ion-card-header>\n          <ion-card-content *ngFor=\"let edu of profile.education\">\n            <div class=\"experience-education-item-header\">\n              <h1>{{edu.school}}</h1>\n              <p>{{edu.year}}</p>\n            </div>\n\n            <div class=\"experience-education-item-desc\">\n              <p><span>Degree:</span>{{edu.degree}}</p>\n            </div>\n\n            <div class=\"experience-education-item-desc\">\n              <p><span>Field Of Study:</span>{{edu.fieldofstudy}}</p>\n            </div>\n\n            <div class=\"experience-education-item-desc\">\n              <p><span>Description: </span>{{edu.description}}</p>\n            </div>\n            <p class=\"seperator\"></p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <div id=\"github-name\" *ngIf=\"profile.githubusername\">\n        <ion-icon></ion-icon>\n        <h1 *ngIf=\"githubRepo\">Github Repos</h1>\n      </div>\n\n      <ion-card id=\"github-repos\" *ngFor=\"let repo of githubRepo\">\n        <ion-card-content >\n          <div id=\"repo-desc\">\n            <a [href]=\"repo.html_url\">{{repo.name}}</a>\n            <p>{{repo.description}}</p>\n          </div>\n          <div id=\"repo-status\">\n            <ion-button>Stars: <span>{{repo.stargazers_count}}</span></ion-button>\n            <ion-button>Watchers: <span>{{repo.watchers_count}}</span></ion-button>\n            <ion-button>Forks: <span>{{repo.forks_count}}</span></ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_profile_profile_module_ts.js.map