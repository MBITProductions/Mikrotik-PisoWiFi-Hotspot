// FOR PROGRAMMERS NOTE: DO NOT CHANGE THE "VAR" TO "CONST". OLD VERSION OF BROWSER DOES NOT SUPPORT IT AND IT WILL NOT RUN THE APPLICATION.

/**
 * Piso WiFi Vendo Configuration
 *
 * Variables
 * @name The name of the vendo that will display during insert coin
 * @ip IP address of the target NodeMCU ESP8266
 *
 * Instruction
 * - If there are no sub vendo is configured there will be no selection will show up.
 * - Only change the values of @name and @ip example at the main vendo configuration.
 * - You can add multiple sub vendo configurations by following the main configuration.
 * - To remove a vendo just add "//" at the starting of "{" until the ending of "}," or clear it from the list.
 */
var vendos = [
  /**
   * MAIN VENDO CONFIG
   */
  {
    name: "Main Vendo",
    ip: "10.0.0.2",     // Default WiFi IP Address 
    // ip: "10.0.0.3",     // Default Ethernet IP Address
  },
  /**
   * SUB VENDO'S CONFIG
   */
  // {
  //     "name": "Sub Vendo 1",
  //     "ip": "10.0.0.3"
  // },
  // {
  //     "name": "Sub Vendo 2",
  //     "ip": "10.0.0.4"
  // },
];

/**
 * Hotspot Portal Titles
 *
 * For the header brand naming of the lowercase, some letters will appear in uppercase, this is due to the font size styling.
 *
 * If you want to change the "Tab Title" of the Web/Browser Page you must manually do it on HTML files.
 * It can be done in script except the original branding name will be saved instead of the configured one.
 * 1. login.html and alogin.html
 *  - <title>Login | Piso WiFi Vendo - MBit IT Solutions</title>
 * 2. logout.html
 *  - <title>Logout | Piso WiFi Vendo - MBit IT Solutions</title>
 * 3. status.html
 *  - <title>Status | Piso WiFi Vendo - MBit IT Solutions</title>
 * Note: Do not remove the tab title for the wording of "Login, Logout, and Status". Just change the branding to be safe.
 *       Some of the scripts depend on it and may cause some functions may not work.
 */
var headerBrand = "MBit"; // Letters will appear as lowercase
var headerBrandSub = "IT Solutions"; // Letters will appear as uppercase

/**
 * Display Username/Voucher Only or Username/Voucher and Password
 *
 * Set "true" to enable or "false" disable.
 */
var isUsernameOnly = true;

/**
 * Enable/Disable Sound Effects
 *
 * Set "true" to enable or "false" disable.
 * If you want to change the mp3 file sound effect just use the same filename at sound folder.
 */
var isSoundEnable = true;

/**
 * MULTIPLE VENDO CONFIG
 *
 * Minimum and maximum display vendo display per row.
 * Treat it like a table with column and row.
 *
 * The display per row will depend on the screen of the user.
 * Minimum display are for the phones while the
 * maximum are for tablets, desktops, and larger ones.
 *
 * Notes:
 * - The minimum value per row is 1 and the maximum is 12.
 * - Minimum and maximum value can be the same.
 */
var vendoDisplayPerRowMin = 1;
var vendoDisplayPerRowMax = 2;

/***
 * NodeMCU API Request Timer and NodeMCU API Request Retry Failure Request(might due to connectivity issue)
 *
 * @NodeMCURealtimeTimercheckRequest Checks the status of NodemCU insert coin timer. The higher the number the longer the timer moves.
 * @sendNextRequestMax When an API request fails it will try to resend the request. For example "is nodemcu accepting coins", "is nodemcu inserting coins",
 *  and "confirming the payment".
 * @maxGenerateRequestMax Same concept of @sendNextRequestMax but it only checks at generating the voucher
 *
 * Note: The time it takes depends on how long it will retry to request plus the number of tries multiply and multiply it to @NodeMCURealtimeTimercheckRequest.
 * For example ( @sendNextRequestMax * @NodeMCURealtimeTimercheckRequest ) + API Request Time
 */
var NodeMCURealtimeTimercheckRequest = 300; // Milliseconds
var sendNextRequestMax = 3;
var maxGenerateRequestMax = 5;
