(function (window) {
    var gettext = window.gettext || (function (string) {
        // Shim Django's `gettext` if unavailable.
        return string;
    });

    var span = function(text) {
        // Surround text with a span.
        return '<span>' + text + '</span>'
    };

    window.tooltipsCatsPerResource = [
        '.recommender_resourceEditButton',
        '.recommenderVoteArrowUp',
        '.recommenderVoteArrowDown',
        '.recommenderVoteScore',
        'a',
        '.recommender_flagResource',
        '.recommender_remove',
        '.recommender_endorse.recommender_endorsed'
    ];

    window.tooltipsCats = [
        '.recommender_resourceAddButton',
        '.recommender_previewingImg',
        '.recommender_inTitle',
        '.recommender_inUrl',
        '.recommender_inDescriptionText',
        '.addResourceScreenshot',
        '.recommender_backToViewButton',
        '.recommender_flagReason',
        '.deleteResource',
        '.recommender_hideShow.recommender_resourceListExpanded',
        '.recommender_resourceRankingForRemovalButton.recommender_removeMode'
    ];

    window.tooltipsEditCats = [
        '.recommender_editTitle',
        '.recommender_editUrl',
        '.recommender_editDescriptionText',
        '.editResourceScreenshot'
    ];

    window.tooltipsCatsText = {
        '.recommender_resourceAddButton': span(gettext('Recommend a new resource which may be helpful to other students solving this problem')),
        '.recommender_resourceEditButton': span(gettext('Edit this resource')),
        '.recommenderVoteArrowUp': span(gettext('Upvote if the resource is helpful')),
        '.recommenderVoteArrowDown': span(gettext('Downvote if the resource is not helpful')),
        '.recommenderVoteScore': span(gettext('Votes')), //
        'a': span(gettext('Resource title')), // TODO: I would suggest making the description be the tooltip.
        '.recommender_remove': span(gettext('Remove this resource and give the reason why you do that')),
        '.recommender_previewingImg': span(gettext('Preview image (typically, a screenshot)')),
        '.recommender_inTitle': span(gettext('Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them')),
        '.recommender_inUrl': span(gettext('Cut-and-paste the URL of the resource.')),
        '.recommender_inDescriptionText': span(gettext('Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title')),
        '.addResourceScreenshot': span(gettext('Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them')),
        '.recommender_editTitle': span(gettext('Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them')),
        '.recommender_editUrl': span(gettext('Cut-and-paste the URL of the resource.')), // TODO: Give instructions to go to element of learning sequence, or time in video
        '.recommender_editDescriptionText': span(gettext('Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title')),
        '.editResourceScreenshot': span(gettext('Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them')),
        '.recommender_backToViewButton': span(gettext('Go back to the main list')),
        '.recommender_flagReason': span(gettext('Give a meaningful reason for why this resource should be removed')),
        '.recommender_flagResource': span(gettext('Flag this resource as problematic and give your reason')),
        '.deleteResource': span(gettext('Delete this resource')),
        '.recommender_hideShow': span(gettext('Show a list of student-recommented related resources')),
        '.recommender_hideShow.recommender_resourceListExpanded': span(gettext('Hide the recommendations list')),
        '.recommender_endorse': span(gettext('Check the icon to endorse this resource')),
        '.recommender_endorse.recommender_endorsed': span(gettext('This resource is endorsed by staff')),
        '.recommender_resourceRankingForRemovalButton': span(gettext('Click to view resources for removal')),
        '.recommender_resourceRankingForRemovalButton.recommender_removeMode': span(gettext('Click to view resources in ordinary decreasing-vote order'))
    };

    window.problematicReasonsPrefix = '<br/>' + gettext('Here is a list of reasons why students think this resource problematic:') + ' <br/>&nbsp;&nbsp;&nbsp;&nbsp;';
    window.endorsedReasonsPrefix = '<br/>' + gettext('The reason why it is endorsed is:') + ' <br/>&nbsp;&nbsp;&nbsp;&nbsp;';
    window.recommenderResourceAriaPrefix = gettext('Resource: ');
    window.recommenderVoteScorePostfix = ' ' + gettext('votes');
    window.reasonSeparator = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';

    window.exportResourceFileInfo = {
        'fileType': 'data:application/json;charset=utf-8,',
        'fileName': 'resource.json'
    };

    window.confirmInterruptSubmission = gettext('The content you typed has not been submitted yet. Are you sure to go back?');

    window.headerText = {
        '.recommender_importResourcePage': gettext('Import resources'),
        '.recommender_addResourcePage': gettext('Suggest resource'),
        '.recommender_editResourcePage': gettext('Edit existing resource'),
        '.recommender_flagResourcePage': gettext('Flag Resource'),
        '.recommender_endorsePage': gettext('Endorse Resource'),
        '.recommender_removePage': gettext('Remove Resource')
    };

    window.modifyPageTitle = {
        '.recommender_importResourcePage': gettext('Upload resources in JSON format to the database.'),
        '.recommender_addResourcePage': gettext('Suggest a resource which can help other students with this problem. Please do not give the answer directly.'),
        '.recommender_editResourcePage': gettext('Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.'),
        '.recommender_flagResourcePage': gettext('Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.'),
        '.recommender_endorsePage': gettext('Endorse this resource and give the reason why you do that.'),
        '.recommender_removePage': gettext('Remove this resource and give the reason why you do that.')
    };

    window.writeDatabaseEnum = {
        ADD: 'add',
        EDIT: 'edit'
    };

    window.voteTypeEnum = {
        UPVOTE: 'upvote',
        DOWNVOTE: 'downvote'
    };

    window.sortResourceEnum = {
        INCREASE: 'increase',
        DECREASE: 'decrease'
    };

    window.voteConfigs = {
        'upvote': {
            'buttonClassName': 'recommenderVoteArrowUp',
            'eventName': 'arrowUp',
            'serverEventName': 'recommender_upvote',
            'voteClassName': 'recommender_upvoting',
            'previousVoteClassName': 'recommender_downvoting'
        },
        'downvote': {
            'buttonClassName': 'recommenderVoteArrowDown',
            'eventName': 'arrowDown',
            'serverEventName': 'recommender_downvote',
            'voteClassName': 'recommender_downvoting',
            'previousVoteClassName': 'recommender_upvoting'
        }
    };

    window.resourceListHeader = {
        'hide': gettext('Hide related resources'),
        'show': gettext('Show related resources')
    }

    window.ariaLabelText = {
        'upvote': 'upvote',
        'downvote': 'downvote',
        'undoUpvote': 'undo upvote',
        'undoDownvote': 'undo downvote',
        'problematicResource': 'problematic resource',
        'endorsedResource': 'endorsed resource',
        'endorseResource': 'endorse resource',
        'undoEndorseResource': 'undo endorse resource',
        'removeResource': 'remove resource'
    }

    window.toggleVoteFlag = 'toggle';
    window.endorseFlag = 'reason';
    window.removeIcon = '<span class="ui-icon ui-icon-gear recommender_remove"></span>';

    window.loggerStatus = {
        'hideShow': {
            'hide': 'hide',
            'show': 'show'
        },
        'pagination': {
            'moreIcon': 'Click on morePageIcon',
            /**
             * Generate the string for logging the page-change event.
             * @param {string} fromPage The index of the previously shown page.
             * @param {string} toPage The index of the currently shown page.
             * @returns {string} The string for logging the page-change event.
             */
            toPageNIcon: function (fromPage, toPage) {
                return gettext('From page {fromPage} To page {toPage}')
                    .replace('{fromPage}', fromPage)
                    .replace('{toPage}', toPage);
            }
        },
        'exportResource': {'exportResource': gettext('Export resources')},
        'importResource': {
            'attempt': gettext('Entering import resource mode'),
            'complete': gettext('Import resources')
        },
        'addResource': {
            'attempt': gettext('Entering add resource mode'),
            'complete': gettext('Add new resource')
        },
        'editResource': {
            'attempt': gettext('Entering edit resource mode'),
            'complete': gettext('Edit existing resource')
        },
        'flagResource': {
            'attempt': gettext('Entering flag resource mode'),
            'complete': gettext('Flag resource'),
            'unflag': gettext('Unflag resource')
        },
        'endorseResource': {
            'endorse': gettext('Endorse resource'),
            'unendorse': gettext('Unendorse resource')
        },
        'removeResource': {'removeResource': gettext('Remove resource')},
        'hover': {'hover': gettext('Hovering resource')},
        'clickResource': {'clickResource': gettext('A resource was clicked')},
        'backToView': {'backToView': gettext('Back to resource list mode')}
    };
}(window));
