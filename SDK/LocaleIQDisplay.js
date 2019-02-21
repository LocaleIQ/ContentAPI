//***************************************************************************//
//  LocaleIQ Corporation - LocaleIQ Geographic Tools version 1.0             //
//  Copyright LocaleIQ Corporation                                           //
//  LocaleIQ Corporation Morgan Hill CA 95037                                //
//  Release Date: 01/29/2019                                                 //
//  Author: Tom Landers                                                      //
//***************************************************************************//

function LoadDisplay(_entity, theme) {
    switch (theme) {
        case 'Standard':
            LoadVertical(_entity);
            break;
    }
}
function LoadVertical(_entity) {
    document.getElementById('PnlEntity').className = "infoboxLeft";

    // CONFIRM THIS REQUEST HAS VALID CONTAINER
    if (document.getElementById('PnlEntityContent')) {
        // CLEAR CURRENT CONTAINER
        document.getElementById('PnlEntityContent').innerHTML = '';

        var currContent = '';  // HTML Container

        if (_entity.Title.length > 0) {
            currContent += '<div class="col10" style="padding:10px;"><h3>' + _entity.Title + '</h3>';
            currContent += '<span style="font-size:0.825rem;">' + _entity.Location.Address + ' ' + _entity.Location.City + ' ' + _entity.Location.PostalCode + ' ' + _entity.Location.Country + '</span><p />';
            currContent += '<div class="col10" style="margin-top:15px;">';
            if (_entity.Website.trim() != '') {
                currContent += '<div class="col3" style="font-size:0.825rem;color:#008ec3;"><i class="fa fa-globe" style="padding-right:5px;"></i><a href="' + _entity.Website + '">Website</a></div>';
            }
            if (_entity.Phone.trim() != '') {
                currContent += '<div class="col3" style="font-size:0.825rem;color:#008ec3;text-align:center;"><i class="fa fa-phone" style="padding-right:5px;"></i>' + _entity.Phone + '</div>';
            }
            if (_entity.Email.trim() != '') {
                currContent += '<div class="col3" style="font-size:0.825rem;color:#008ec3;text-align:right;"><i class="fa fa-envelope" style="padding-right:5px;"></i><a href="mailto:' + _entity.Email + '">Email</a></div>';
            }
            currContent += '</div>';
            currContent += '<div class="col10" style="margin-top:15px;">';
            currContent += '<div class="col10" style="font-size:0.825rem;">Founded:</div>';
            currContent += '<div class="col10" style="font-size:0.825rem;">Employees:  <a style="float:right;padding-right:25px;color:maroon;">( 0 current openings )</a></div>';
            currContent += '<div class="col10" style="font-size:0.825rem;">Funding:</div>';
            currContent += '</div>';
            currContent += '</div > ';
        }

        if (_entity.Description.length > 0) {
            currContent += '<div class="col10" style="padding:10px;"><h3>About</h3></div>';
            currContent += '<div class="col10" style="padding:10px;">' + _entity.Description + "</div>";
        }
        if (_entity.Media.ImageMedium.length >= 0) {
            document.getElementById('PnlImageGallery').style.backgroundImage = 'url(' + _entity.Media.ImageMedium[galleryId] + ')';
        }

        currContent += '<div class="col10" style="padding:10px;"><h3>Categories</h3></div>';
        currContent += '<div class="col10" style="padding:10px;"><h3>Technologies</h3></div>';
        currContent += '<div class="col10" style="padding:10px;"><h3>Partners</h3></div>';
        // POPULATE CONTAINER
        document.getElementById('PnlEntityContent').innerHTML = currContent;
    }
}
function LoadHorizontal() { }