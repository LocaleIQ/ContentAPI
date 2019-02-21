//***************************************************************************//
//  LocaleIQ Corporation - LocaleIQ Geographic Tools version 1.0             //
//  Copyright LocaleIQ Corporation                                           //
//  LocaleIQ Corporation Morgan Hill CA 95037                                //
//  Release Date: 01/29/2019                                                 //
//  Author: Tom Landers                                                      //
//***************************************************************************//

var galleryId = 0, outputType = 0;

// Entity Object
var _entity = {
    Feature: '',
    FeatureType: '',
    MasterIndustryID: '',
    MasterFeatureID: '',
    MasterEntityID: '',
    MasterTitle: '',
    Title: '',
    Description: '',
    Phone: '',
    Email: '',
    Website: '',
    ReservationSite: '',
    Icon: '',
    Location: {
        Address: '',
        AddressCont: '',
        City: '',
        PostalCode: '',
        County: '',
        Country: ''
    },
    Media: {
        PhotoDefault: '',
        Count: '',
        Icon: [],
        ImageSmall: [],
        ImageMedium: [],
        ImageLarge: [],
        ImageTitle: [],
        Title: [],
        Description: [],
        Source: []
    },
    Hours: {
        Count: '',
        IsHoliday: [],
        TimeZone: [],
        Schedule: [],
        ScheduleTitle: [],
        StartDate: [],
        EndDate: [],
        OpenTime: [],
        ReOpenTime: [],
        OpenVerbose: [],
        CloseTime: [],
        ReCloseTime: [],
        CloseVerbose: [],
        DaysOfWeek: []
    },
    Fees: {
        Count: '',
        Type: [],
        StartDate: [],
        StartTime: [],
        EndDate: [],
        EndTime: [],
        Title: [],
        Description: [],
        FeeAmount: [],
        FeeURL: []
    },
    Notices: {
        Count: '',
        IsFilter: [],
        Type: [],
        StartDate: [],
        StartTime: [],
        EndDate: [],
        EndTime: [],
        Title: [],
        Description: [],
        Icon: [],
        ShowAlertFilters: 0
    },
    Closures: {
        Count: '',
        Type: [],
        StartDate: [],
        StartTime: [],
        EndDate: [],
        EndTime: [],
        Title: [],
        Description: [],
        Icon: []
    },
    Rules: {
        Count: '',
        IsFilter: [],
        Type: [],
        StartDate: [],
        StartTime: [],
        EndDate: [],
        EndTime: [],
        Title: [],
        Description: [],
        Icon: [],
        ShowRuleFilters: 0
    },
    Conditions: {
        Count: '',
        IsFilter: [],
        Type: [],
        StartDate: [],
        StartTime: '',
        EndDate: [],
        EndTime: [],
        Title: [],
        Description: [],
        Icon: [],
        ShowConditionFilters: 0
    },
    Activities: {
        Count: '',
        IsFilter: [],
        Type: [],
        StartDate: [],
        StartTime: [],
        EndDate: [],
        EndTime: [],
        Difficulty: [],
        Title: [],
        Description: [],
        icon: [],
        ShowActivityFilters: 0
    },
    Amenities: {
        Count: '',
        IsFilter: [],
        Type: [],
        StartDate: [],
        EndDate: [],
        Title: [],
        Description: [],
        Icon: [],
        ShowAmenityFilters: 0
    },
    Features: {
        Count: '',
        IsFilter: [],
        FeatureID: [],
        FeatureType: [],
        Icon: [],
        ShowFeatureFilters: 0
    },
    Demographics: {
        Count: '',
        Type: [],
        DatePeriod: [],
        StartDate: [],
        EndDate: [],
        Population: [],
        MedianAge: [],
        MalePopulation: [],
        FemalePopulation: [],
        MedianMaleAge: [],
        MedianFemaleAge: [],
        AsianPopulation: [],
        CaucasionPopulation: [],
        HispanicPopulation: [],
        BlackPopulation: [],
        IndianPopulation: [],
        HawaiianPopulation: [],
        OtherPopulation: []
    },
    WineVarietals: {
        Count: '',
        IsFilter: [],
        Title: [],
        Description: [],
        ShowWineVarietalFilters: 0
    },
    Cuisines: {
        Count: '',
        IsFilter: [],
        Title: [],
        Description: [],
        ShowCuisineFilters: 0
    },
    Menus: {
        Count: '',
        MenuTitle: [],
        MenuStartTime: [],
        MenuEndTime: [],
        MenuItems: {
            MenuItemCategory: [],
            MenuItem: [],
            MenuItemDescription: [],
            MenuItemPrice: [],
            MenuItemPhoto: []
        }
    },
    Employment: {
        Count: '',
        Jobs: {
            IsFeature: [],  // Is this the Featured Listing
            IsPremium: [], // For Paid Premium Listings
            JobPosted: [], // Date Job was Posted
            JobType: [], // Full-time, Contract, Temporary, etc...
            Jobterm: [], // Full-Time, 3 mos., 12 mos., etc..
            JobTitle: [], 
            JobDescription: [],
            JobAddress: [],
            JobCity: [],
            JobState: [],
            JobCountry: [],
            JobContact: [], // Recuriter Name
            JobContactEmail: [],
            JobContactPhone: [],
            Employer: [],
            EmployerAbout: [],
            EmployerURL: []
        }
    },
    Business: {
        BusinessName: '',
        BusinessFounded: '', 
        BusinessEmployess: '',
        BusinessFundingType: '',
        BusinessStage: '', // Startup, Private, Public
        BusinessStockTicker: '',
        BusinessListings: {
            BusinessListing: [] // Ex. 2016 Top 100, 2018 Top 10 GovTech, 2019 Top 5 Autonomous,
        },
        BusinessCategories: {
            BusinessCategory: [] // Digital Mapping, Logistics, GIS, Autonomous Driving
        },
        BusinessSectors: {
            BusinessSector: [] // Ex. Smart Cities, GovTech, Mobility
        },
        BusinessTechStacks: {
            BusinessTechStack: [] // Python, PostgreSQL, 
        },
        BusinessPartners: {
            BusinessPartner: [], // Ex. Microsoft, ESRI, Google
            BusinessPartnerType: [] // Ex. Gold Partner, Reseller, etc...
        }
    },
    Geography: {
        Count: '',
        ShapeURI: [],
        ShapeType: [],
        MeasureType: [],
        Distance: [],
        Area: [],
        Perimeter: [],
        Radius: [],
        Elevation: [],
        ElevationGain: [],
        ElevationLoss: []
    }
};

// LocaleIQ Application
var LIQContent = {
    getCustomerInfo: function (cid) { contentType = 'Customer/'; getContentXML(oLnIQContentAPIPublic + contentType + cid); },
    getEntityInfo: function (sid, eid) { contentType = 'Entity/'; getContentXML(oLnIQContentAPIPublic + contentType + sid + '/' + eid); },
    getEntityContent: function (sid, eid) { contentType = 'Entity/'; getContentXML(oLnIQContentAPIPublic + contentType + sid + '/' + eid); },
    getEventInfo: function (eventid) { contentType = 'Event/'; getContentXML(oLnIQContentAPIPublic + contentType + eventid); },
    getProjectInfo: function (projid) { contentType = 'Project/'; getContentXML(oLnIQContentAPIPublic + contentType + projid); },
    getClosureInfo: function () { contentType = 'Closure/'; getContentXML(oLnIQContentAPIPublic + contentType + catid); },
    getAlertInfo: function () { contentType = 'Alert/'; getContentXML(oLnIQContentAPIPublic + contentType + catid); },
    getIoTInfo: function (sensorid) { contentType = 'IoT/'; getContentXML(oLnIQContentAPIPublic + contentType + sensorid); }
};

// LocaleIQ API SERVICE
function getContentXML(url) {
    outputType = 0;
    $.ajax({
        url: url,
        dataType: "xml",
        success: LniQContentParser,
        error: function () { alert("Sorry, we are unable to load the content you requested."); }
    });
}
function LniQContentParser(xml) {
    disposeEntity();
    $(xml).find("Entity").each(function () {       
        _entity.Feature = $(this).find('Feature').text();
        _entity.FeatureType = $(this).find('FeatureType').text();
        _entity.MasterTitle = $(this).find('MasterEntityTitle').text();
        _entity.MasterIndustryID = $(this).find('MasterEntityTitle').attr('IndustryID');
        _entity.MasterFeatureID = $(this).find('MasterEntityTitle').attr('FeatureID');
        _entity.MasterEntityID = $(this).find('MasterEntityTitle').attr('EntityID');
        _entity.Title = $(this).find('EntityTitle').text();
        _entity.Description = $(this).find('EntityDescription').text();
        _entity.Phone = $(this).find('EntityPhone').text();
        _entity.Email = $(this).find('EntityEmail').text();
        _entity.Website = $(this).find('EntityWebsite').text();
        _entity.ReservationSite = $(this).find('EntityReservationWebsite').text();
        _entity.Icon = $(this).find('EntityIcon').text();
        // Populate Location
        _entity.Location.Address = $(this).find('EntityAddress').text();
        _entity.Location.AddressCont = $(this).find('EntityAddress1').text();
        _entity.Location.City = $(this).find('EntityCity').text();
        _entity.Location.PostalCode = $(this).find('EntityPostalCode').text();
        _entity.Location.County = $(this).find('EntityCounty').text();
        _entity.Location.Country = $(this).find('EntityCountry').text();
        // Spatial Information
        _entity.Geography.Area = $(this).find('Area').text();
        // Populate Media
        var nodeMultimedia = $(this).find("Multimedia");
        nodeMultimedia.each(function () {
            var nodeMedia = $(this).find("Media");
            nodeMedia.each(function () {
                _entity.Media.Count = $(this).find('MediaTitle').length + 1;
                _entity.Media.Title.push($(this).find('MediaTitle').text());
                _entity.Media.Description.push($(this).find('MediaDescription').text());
                _entity.Media.Icon.push($(this).find('MediaIcon').text());
                _entity.Media.ImageSmall.push($(this).find('MediaSmall').text());
                _entity.Media.ImageMedium.push($(this).find('MediaMedium').text());
                _entity.Media.ImageLarge.push($(this).find('MediaLarge').text());
            });
        });
        // Populate Media
        var nodeHours = $(this).find("Hours");
        nodeHours.each(function () {
            var nodeSchedule = $(this).find("Schedule");
            nodeSchedule.each(function () {
                _entity.Hours.Count = $(this).find('ScheduleTitle').length + 1;
                _entity.Hours.ScheduleTitle.push($(this).find('ScheduleTitle').text());
                _entity.Hours.StartDate.push($(this).find('ScheduleStartDate').text());
                _entity.Hours.OpenTime.push($(this).find('ScheduleStartTime').text());
                _entity.Hours.EndDate.push($(this).find('ScheduleEndDate').text());
                _entity.Hours.CloseTime.push($(this).find('ScheduleCloseTime').text());
                _entity.Hours.ReOpenTime.push($(this).find('ScheduleReStartTime').text());
                _entity.Hours.ReCloseTime.push($(this).find('ScheduleReCloseTime').text());
                _entity.Hours.OpenVerbose.push($(this).find('ScheduleStartVerbose').text());
                _entity.Hours.CloseVerbose.push($(this).find('ScheduleCloseVerbose').text());
            });
        });
        // Populate Activities
        var nodeActivities = $(this).find("Activities");
        nodeActivities.each(function () {
            var nodeActivity = $(this).find("Activity");
            nodeActivity.each(function () {
                _entity.Activities.Count = $(this).find('ActivityTitle').length + 1;
                _entity.Activities.Title.push($(this).find('ActivityTitle').text());
                _entity.Activities.Description.push($(this).find('ActivityDescription').text());
                _entity.Activities.StartDate.push($(this).find('ActivityStartDate').text());
                _entity.Activities.StartTime.push($(this).find('ActivityStartTime').text());
                _entity.Activities.EndDate.push($(this).find('ActivityEndDate').text());
                _entity.Activities.EndTime.push($(this).find('ActivityEndTime').text());
            });
        });
        // Populate Features
        var nodeFeatures = $(this).find("Features");
        nodeFeatures.each(function () {
            var nodeFeature = $(this).find("Feature");
            nodeFeature.each(function () {
                _entity.Features.Count = $(this).find('FeatureType').length + 1;
                _entity.Features.FeatureType.push($(this).find('FeatureType').text());
                _entity.Features.Icon.push($(this).find('FeatureIcon').text());
            });
        });
        // Populate Rules
        var nodeRules = $(this).find("Rules");
        nodeRules.each(function () {
            var nodeRule = $(this).find("Rule");
            nodeRule.each(function () {
                _entity.Rules.Count = $(this).find('RuleTitle').length + 1;
                _entity.Rules.Type.push($(this).find('RuleType').text());
                _entity.Rules.Title.push($(this).find('RuleTitle').text());
                _entity.Rules.Description.push($(this).find('RuleDescription').text());
                _entity.Rules.StartDate.push($(this).find('RuleStartDate').text());
                _entity.Rules.StartTime.push($(this).find('RuleStartTime').text());
                _entity.Rules.EndDate.push($(this).find('RuleEndDate').text());
                _entity.Rules.EndTime.push($(this).find('RuleEndTime').text());
            });
        });
        // Populate Conditions
        var nodeConditions = $(this).find("Conditions");
        nodeConditions.each(function () {
            var nodeCondition = $(this).find("Condition");
            nodeCondition.each(function () {
                _entity.Conditions.Count = $(this).find('ConditionTitle').length + 1;
                _entity.Conditions.Title.push($(this).find('ConditionTitle').text());
                _entity.Conditions.Description.push($(this).find('ConditionDescription').text());
                _entity.Conditions.StartDate.push($(this).find('ConditionStartDate').text());
                _entity.Conditions.EndDate.push($(this).find('ConditionEndDate').text());
            });
        });
        // Populate Notices
        var nodeNotices = $(this).find("Notices");
        nodeNotices.each(function () {
            var nodeNotice = $(this).find("Notice");
            nodeNotice.each(function () {
                _entity.Notices.Count = $(this).find('NoticeTitle').length + 1;
                _entity.Notices.Title.push($(this).find('NoticeTitle').text());
                _entity.Notices.Title.push($(this).find('NoticeType').text());
                _entity.Notices.Description.push($(this).find('NoticeDescription').text());
                _entity.Notices.StartDate.push($(this).find('NoticeStartDate').text());
                _entity.Notices.StartTime.push($(this).find('NoticeStartTime').text());
                _entity.Notices.EndDate.push($(this).find('NoticeEndDate').text());
                _entity.Notices.EndTime.push($(this).find('NoticeEndTime').text());
            });
        });
        // Populate Closures
        var nodeClosures = $(this).find("Closures");
        nodeClosures.each(function () {
            var nodeClosure = $(this).find("Closure");
            nodeClosure.each(function () {
                _entity.Closures.Count = $(this).find('ClosureTitle').length + 1;
                _entity.Closures.Title.push($(this).find('ClosureTitle').text());
                _entity.Closures.Description.push($(this).find('ClosureDescription').text());
                _entity.Closures.StartDate.push($(this).find('ClosureStartDate').text());
                _entity.Closures.StartTime.push($(this).find('ClosureStartTime').text());
                _entity.Closures.EndDate.push($(this).find('ClosureEndDate').text());
                _entity.Closures.EndTime.push($(this).find('ClosureEndTime').text());
            });
        });
        // Populate Wine Varietals
        var nodeWineVarietals = $(this).find("WineVarietals");
        nodeWineVarietals.each(function () {
            var nodeVarietals = $(this).find("Varietal");
            nodeVarietals.each(function () {
                _entity.WineVarietals.Count = $(this).find('Title').length + 1;
                _entity.WineVarietals.Title.push($(this).find('Title').text());
            });
        });
    });
    switch (outputType) {
        case 0:
            LoadDisplay(_entity, 'Standard');
            break;
        case 1:
            return _entity;
            break;
    }
}
function disposeEntity() {
    _entity.Title = '';
    _entity.MasterTitle = '';
    _entity.ReservationSite = '';
    _entity.Description = '';
    // Clear Location, Contact & Hours
    _entity.Location.Address = '';
    _entity.Location.City = '';
    _entity.Location.County = '';
    _entity.Location.Country = '';
    _entity.Location.PostalCode = '';
    //_entity.Phone = '';
    //_entity.Email = '';
    //_enity.Website = '';

    // Dispose of Images
    if (_entity.Media.ImageMedium.length > 0) {
        _entity.Media.Title.splice(0, _entity.Media.Title.length);
        _entity.Media.Description.splice(0, _entity.Media.Description.length);
        _entity.Media.Icon.splice(0, _entity.Media.Icon.length);
        _entity.Media.ImageSmall.splice(0, _entity.Media.ImageSmall.length);
        _entity.Media.ImageMedium.splice(0, _entity.Media.ImageMedium.length);
        _entity.Media.ImageLarge.splice(0, _entity.Media.ImageLarge.length);
    }

    if (_entity.Hours.ScheduleTitle.length > 0) {
        _entity.Hours.Count = '';
        _entity.Hours.ScheduleTitle.splice(0, _entity.Hours.ScheduleTitle.length);
        _entity.Hours.StartDate.splice(0, _entity.Hours.StartDate.length);
        _entity.Hours.EndDate.splice(0, _entity.Hours.EndDate.length);
        _entity.Hours.OpenTime.splice(0, _entity.Hours.OpenTime.length);
        _entity.Hours.OpenVerbose.splice(0, _entity.Hours.OpenVerbose.length);
        _entity.Hours.CloseTime.splice(0, _entity.Hours.CloseTime.length);
        _entity.Hours.CloseVerbose.splice(0, _entity.Hours.CloseVerbose.length);
    }

    if (_entity.Rules.Title.length > 0) {
        _entity.Rules.Count = '';
        //_entity.Rules.Type.splice(0, _entity.Rules.Type.length);
        //_entity.Rules.StartDate.splice(0, _entity.Rules.StartDate.length);
        //_entity.Rules.EndDate.splice(0, _entity.Rules.EndDate.length);
        //_entity.Rules.StartTime.splice(0, _entity.Rules.StartTime.length);
        //_entity.Rules.EndTime.splice(0, _entity.Rules.EndTime.length);
        _entity.Rules.Title.splice(0, _entity.Rules.Title.length);
        //_entity.Rules.Description.splice(0, _entity.Rules.Description.length);
    }
    if (_entity.Features.FeatureType.length > 0) {
        _entity.Features.Count = '';
        _entity.Features.FeatureType.splice(0, _entity.Features.FeatureType.length);
        _entity.Features.Icon.splice(0, _entity.Features.Icon.length);
    }
    if (_entity.WineVarietals.Title.length > 0) {
        _entity.WineVarietals.Count = '';
        _entity.WineVarietals.Title.splice(0, _entity.WineVarietals.Title.length);
    }
}
function galleryNavigate(dir) {
    if (dir == 'next') {
        if (galleryId == _entity.Media.ImageMedium.length - 1) { galleryId = 0; } else { galleryId++; }
        document.getElementById('EntityGallery').style.backgroundImage = 'url(' + _entity.Media.ImageMedium[galleryId] + ')';
    }
    else {
        if (galleryId == 0) { galleryId = _entity.Media.ImageMedium.length - 1; } else { galleryId--; }
        document.getElementById('EntityGallery').style.backgroundImage = 'url(' + _entity.Media.ImageMedium[galleryId] + ')';
    }
}
function displayModalNavigate(dir) {
    if (dir == 'next') {
        if (galleryId == _entity.Media.ImageMedium.length - 1) { galleryId = 0; } else { galleryId++; }
        document.getElementById('ModalGallery').style.backgroundImage = 'url(' + _entity.Media.ImageLarge[galleryId] + ')'
        document.getElementById('EntityGallery').style.backgroundImage = 'url(' + _entity.Media.ImageMedium[galleryId] + ')';
    }
    else {
        if (galleryId == 0) { galleryId = _entity.Media.ImageMedium.length - 1; } else { galleryId--; }
        document.getElementById('ModalGallery').style.backgroundImage = 'url(' + _entity.Media.ImageLarge[galleryId] + ')'
        document.getElementById('EntityGallery').style.backgroundImage = 'url(' + _entity.Media.ImageMedium[galleryId] + ')';
    }
}
function displayModalGallery() {
    document.getElementById('openModalGallery').style.display = 'inline-block';
    document.getElementById('ModalGallery').style.backgroundImage = 'url(' + _entity.Media.ImageLarge[galleryId] + ')'
}