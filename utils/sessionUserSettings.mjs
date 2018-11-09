export function sessionUserSettings(req, res, next){
    // default Wert oder aktueller Wert von der Session lesen
    const userSettings = req.session.userSettings || {orderBy: 'default', orderDirection: -1, cssStyle: "dark.css", hideFinished: false};
    const {orderBy, orderDirection, cssStyle, hideFinished} = req.query;

    if (orderBy) {
        userSettings.orderBy = orderBy;
    }
    if (orderDirection) {
        userSettings.orderDirection = orderDirection;
    }
    if(cssStyle){
        userSettings.cssStyle = cssStyle;
    }
    if(hideFinished){
        userSettings.hideFinished = hideFinished;
    }
    req.userSettings = req.session.userSettings = userSettings;
    next();
}
