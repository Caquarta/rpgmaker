/*:
 * @plugindesc Universal Remote Control
 * @author dahlys
 *
 * @help
 * ==============================================================================
 * Universal Remote Control
 * ============================================================================== 
 * 
 * Live Search Engine: Search in-game for groups of Event IDs by setting  
 * conditions, using their names, notes and even self-switches! Do searches even
 * in conditional branches!
 *
 * Get Values: Get custom self switch values quickly and use them in conditional 
 * branches. Get the values of multiple self switches/variables and store them in 
 * a variable. Quickly obtain a namelist/notelist of all events on the map, or a 
 * subset defined by a source array.
 * 
 * Remote Control: Remotely change the values of self switches/variables en masse
 * and set conditions for the change.
 * 
 * Search, Get and Manipulate:
 *  - Yanfly's self switches and self variables en masse.
 *  - Hime's self variables en masse.
 * 
 * ------------------------------------------------------------------------------
 * How to Use
 * ------------------------------------------------------------------------------
 * 
 * It's complicated. See webpage:
 *
 * https://dahlys.000webhostapp.com/dahlysRemoteControl.html
 * 
 * ==============================================================================
 */
 
 
/* 
---------------------------------------------------------------------------------
    BEGIN MAIN FUNCTION
---------------------------------------------------------------------------------
*/

(function() { 
 
	
/* 
---------------------------------------------------------------------------------
    PLUGIN COMMANDS
---------------------------------------------------------------------------------
*/

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === 'ArraytoInteger') {
			array_to_integer.apply(this, args);
		} else if (command === 'SearchCond') {
			search_condition.apply(this, args);
        } else if (command === 'SearchNames') {
			search_name.apply(this, args);
        } else if (command === 'SearchNotes') {
			search_note.apply(this, args);
        } else if (command === 'SearchSSw') { 
			search_switch.apply(this, args); 
		} else if (command === 'SearchHimeSV') { 
			search_HimeSV.apply(this, args); 	
		} else if (command === 'SearchYanflySV') { 
			search_YanflySV.apply(this, args); 
		} else if (command === 'SearchSSwName') { 
			search_switch_name.apply(this, args);
		} else if (command === 'SearchSSwNote') { 
			search_switch_note.apply(this, args);
		} else if (command === 'SearchYanflySVName') { 
			search_YanflySV_name.apply(this, args);	
		} else if (command === 'SearchYanflySVNote') { 
			search_YanflySV_note.apply(this, args);
		} else if (command === 'SearchHimeSVName') { 
			search_HimeSV_name.apply(this, args);
		} else if (command === 'SearchYanflySVName') { 
			SearchHimeSVNote.apply(this, args);	
		} else if (command === 'get') { 
			get_swswitch_fast.apply(this, args);	
		} else if (command === 'GetSSw') { 
			get_swswitch.apply(this, args);
		} else if (command === 'GetYanflySV') { 
			get_YanflySV.apply(this, args);
		} else if (command === 'GetHimeSV') { 
			get_HimeSV.apply(this, args);
		} else if (command === 'GetNames') { 
			get_names.apply(this, args);	
		} else if (command === 'GetNotes') { 
			get_notes.apply(this, args);	
		} else if (command === 'GetSSwNames') { 
			get_ssw_names.apply(this, args);	
		} else if (command === 'GetSSwNotes') { 
			get_ssw_notes.apply(this, args);
		} else if (command === 'GetYanflySVNames') { 
			get_YanflySV_names.apply(this, args);	
		} else if (command === 'GetYanflySVNotes') { 
			get_YanflySV_notes.apply(this, args);	
		} else if (command === 'GetHimeSVNames') { 
			get_HimeSV_names.apply(this, args);	
		} else if (command === 'GetHimeSVNotes') { 
			get_HimeSV_notes.apply(this, args);	
		} else if (command === 'ssw') { 
			set_swswitch_fast.apply(this, args);	
        } else if (command === 'SetSSw') { 
			set_self_switch.apply(this, args);
		} else if (command === 'SetHimeSV') { 
			set_HimeSV.apply(this, args);
		} else if (command === 'SetYanflySV') { 
			set_YanflySV.apply(this, args);	
        } else if (command === 'NameSetSSw') {
			set_self_switch_name.apply(this, args);
        } else if (command === 'NoteSetSSw') { 
			set_self_switch_note.apply(this, args);
		} else if (command === 'NameSetHimeSV') {
			set_HimeSV_name.apply(this, args);
        } else if (command === 'NoteSetHimeSV') { 
			set_HimeSV_note.apply(this, args);	
		} else if (command === 'NameSetYanflySV') {
			set_YanflySV_name.apply(this, args);
        } else if (command === 'NoteSetYanflySV') { 
			set_YanflySV_note.apply(this, args);	
        }		
    };
	
/* 
---------------------------------------------------------------------------------
    SCRIPT CALLS
---------------------------------------------------------------------------------
*/
	
	Game_Interpreter.prototype.ArraytoInt = function () {
		array_to_integer.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchCondition = function () {
		return search_condition.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchNames = function () {
		return search_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchNotes = function () {
		return search_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchSSw = function () { 
		return search_switch.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchHimeSV = function () { 
		return search_HimeSV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchYanflySV = function () { 
		return search_YanflySV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchSSwName = function () { 
		return search_switch_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchSSwNote = function () { 
		return search_switch_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchYanflySVName = function () { 
		return search_YanflySV_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchYanflySVNote = function () { 
		return search_YanflySV_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchHimeSVName = function () { 
		return search_HimeSV_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SearchHimeSVNote = function () { 
		return search_HimeSV_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.get = function () {
		return get_swswitch_fast.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetSSw = function () {
		return get_swswitch.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetYanflySV = function () {
		return get_YanflySV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetHimeSV = function () {
		return get_HimeSV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetNames = function () {
		return get_names.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetNotes = function () {
		return get_notes.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetSSwNames = function () {
		return get_ssw_names.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetSSwNotes = function () {
		return get_ssw_notes.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetYanflySVNames = function () {
		return get_YanflySV_names.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetYanflySVNotes = function () {
		return get_YanflySV_notes.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetHimeSVNames = function () {
		return get_HimeSV_names.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.GetHimeSVNotes = function () {
		return get_HimeSV_notes.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.ssw = function () { 
		set_swswitch_fast.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SetSelfSw = function () { 
		set_self_switch.apply(this, arguments);
	};	
	
	Game_Interpreter.prototype.SetHimeSV = function () { 
		set_HimeSV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.SetYanflySV = function () { 
		set_YanflySV.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NameSetSelfSw = function () { 
		set_self_switch_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NoteSetSelfSw = function () { 
		set_self_switch_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NameSetHimeSV = function () { 
		set_HimeSV_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NoteSetHimeSV = function () { 
		set_HimeSV_note.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NameSetYanflySV = function () { 
		set_YanflySV_name.apply(this, arguments);
	};
	
	Game_Interpreter.prototype.NoteSetYanflySV = function () { 
		set_YanflySV_note.apply(this, arguments);
	};

/* 
---------------------------------------------------------------------------------
    GAME TEMP FOR CONDITIONALS
---------------------------------------------------------------------------------
*/

	Game_Temp.prototype.SearchNames = function () {
		return search_name.apply(this, arguments);
	};

	Game_Temp.prototype.SearchNotes = function () {
		return search_note.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchSSw = function () { 
		return search_switch.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchHimeSV = function () { 
		return search_HimeSV.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchYanflySV = function () { 
		return search_YanflySV.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchSSwName = function () {
		return search_switch_name.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchSSwNote = function () { 
		return search_switch_note.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchYanflySVName = function () {
		return search_YanflySV_name.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchYanflySVNote = function () { 
		return search_YanflySV_note.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchHimeSVName = function () {
		return search_HimeSV_name.apply(this, arguments);
	};
	
	Game_Temp.prototype.SearchHimeSVNote = function () { 
		return search_HimeSV_note.apply(this, arguments);
	};
	
/* 
---------------------------------------------------------------------------------
    COMMON FUNCTIONS
---------------------------------------------------------------------------------
*/
	
	function input_array(arg, endpt){
		for (var k = arg.length - endpt; k >= 0; k--) {
			if (Array.isArray(arg[k])) {
			for (var j = 0; j < arg[k].length; j++) {
				arg.splice(k + 1, 0, arg[k][j]);
			};
			arg.splice(k, 1); 
			};
		};
		return arg;
	}
	
	function counted_variables(c, n, a) {
		if (c.length > 0) {
			c = c.filter(function(elem, index, self) {
				return index == self.indexOf(elem);
			});
			if (n > 0) {
				$gameVariables.setValue(n, c.length);
			};
			if (a > 0) {
				$gameVariables.setValue(a, c);
			};
		} else {
			if (n > 0) {
				$gameVariables.setValue(n, 0);
			}
			if (a > 0) {
				$gameVariables.setValue(a, 0);
			}
		};		
	};
	
	function array_to_integer() {
		var storeNew = autoPlgCmdFix.apply(this, arguments);
		var convertArray = $gameVariables.value(storeNew[0]);
		if (Array.isArray(convertArray) && convertArray.length > 0) {
			if (convertArray.length == 1 || storeNew.length == 1) {
				$gameVariables.setValue(storeNew[storeNew.length - 1], convertArray[0]);
			} else if (storeNew.length == 2) {
				for (var i = 0; i < convertArray.length; i++) {
					$gameVariables.setValue(storeNew[1] + i, convertArray[i]);
				}
			} else if (storeNew.length == 1 + convertArray.length) {
				for (var i = i; i < storeNew.length; i++) {
					$gameVariables.setValue(storeNew[i], convertArray[i - 1]);
				}
			}
		}
	};
	
	function create_source_array(svstring) {
		if (Array.isArray(svstring)) {
			return svstring;
		} else if (/S\d+/.test(svstring)) {
		var regex = /(?:S)(\d+)/;
		var sourcevariable = Number(regex.exec(svstring)[1]); 
		if (sourcevariable == 0) {
			var sArray = [];
			for (var eId = 1; eId < $dataMap.events.length; eId++) {
				if ($dataMap.events[eId] != null) {
					sArray.push(eId);
				}
			} 
		} else {
			var sArray = $gameVariables.value(sourcevariable);
		}
		return sArray;
		}
	};
	
	function identify_switch(sw, mapId, counted, sAry, value, cond) {	
		for (var i = 0; i < sAry.length; i++) { 
			eventId = sAry[i]; 
			if (eval(cond)) { 
				if (sw == "all or") {
					if ($gameSelfSwitches.value([mapId, eventId, "A"]) == value || $gameSelfSwitches.value([mapId, eventId, "B"]) == value || $gameSelfSwitches.value([mapId, eventId, "C"]) == value || $gameSelfSwitches.value([mapId, eventId, "D"]) == value) {
						counted.push(eventId);
					}
				} else if (sw == "all and") {
					if ($gameSelfSwitches.value([mapId, eventId, "A"]) == value && $gameSelfSwitches.value([mapId, eventId, "B"]) == value && $gameSelfSwitches.value([mapId, eventId, "C"]) == value && $gameSelfSwitches.value([mapId, eventId, "D"]) == value) {
						counted.push(eventId);
					}
				} else { 
					if ($gameSelfSwitches.value([mapId, eventId, sw]) == value) {
						counted.push(eventId);	
					}	
				}
			}
		}
		return counted;
	};
	
	function get_mapId(string) {
		if (string == "thisM") {
			return $gameMap._mapId;
		} else if (/M\d+/.test(string)) {
			var regex = /(?:M)(\d+)/;
			var mapId = Number(regex.exec(string)[1]);
			if (mapId == 0) {
				return $gameMap._mapId;
			} else {
				return mapId;
			}
		} else {
			return string;
		}
	};	
 
/* 
---------------------------------------------------------------------------------
    FIX RAW INPUTS
---------------------------------------------------------------------------------
*/
	// Fixes the strings from plugin command input to booleans, numbers, and arrays
	
	function autoPlgCmdFix() {
		var args = Array.prototype.slice.call(arguments);
		for (var i = args.length - 1; i >= 0; i--) {
			if ( args[i] === "true" || args[i] === "false" || /^\[.*\]$/.test(args[i]) || /^\d+$/.test(args[i]) ) {
				args[i] = JSON.parse(args[i]);
			}
		};
		return args;
	};
	
	/*
	('Tom'^*) X
	('Tom'^*, 1, 2, 'S0') X
	('Tom'^*, 1, 2, 'cond'/bool) X
	('Tom'^*, 1, 2, 'S0', 'cond'/bool) X

	('Tom'^*, 1, 2) X
	*/
	
	function autoSearchNFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if ( typeof args[args.length - 1] === "string" || ( Array.isArray(args[args.length - 1]) && typeof args[args.length - 1][0] === "string" ) || typeof args[args.length - 1] === "boolean" ) {
			if ( /S\d+/.test(args[args.length - 1]) ) { // ('Tom'*, 1, 2, 'S0')
				args.push(true);
			} else if ( typeof args[args.length - 2] == "number" ) { // ('Tom'*, 1, 2, 'cond')
				args.splice(args.length - 1, 0, "S0");
			} else if ( args.length === 1 || !/S\d+/.test(args[args.length - 2]) ) { // ('Tom'*)
				args.push(0);
				args.push(0);
				args.push("S0");
				args.push(true);
			}			
		} else { // ('Tom'*, 1, 2)
			args.push("S0");
			args.push(true);
		};
		return args;
	};
	
	/*
	("A"^*) X
	("A"^*, bool/string/obj*, 'thisMap'/'M3') X
	("A"^*, bool/string/obj*, 'M3', 1, 2, 'S3') X
	("A"^*, bool/string/obj*, 'M3', 1, 2, 'cond') X
	("A"^*, bool/string/obj*, 'M3', 1, 2, s3, 'cond') X

	("A"^*, bool/string/obj*) X
	("A"^*, bool/string/obj*, 'M3', 1, 2, bool) X
	("A"^*, bool/string/obj*, M3, 1, 2, s3, bool) X

	("A"^*, bool/string/obj*, 'M3', 1, 2) X
	("A"^*, bool/string/obj*, 1, 2) X
	*/
	
	function autoSearchSwitchFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if ( typeof args[args.length - 1] === "string" || ( Array.isArray(args[args.length - 1]) && typeof args[args.length - 1][0] === "string" ) ) {
			if ( /S\d+/.test(args[args.length - 1]) ) { // ("A", true, 'M3', 1, 2, 'S3')
				args.push(true); 
			} else if ( args[args.length - 1] === "thisM" || /M\d+/.test(args[args.length - 1]) ) { // ("A", true, 'thisM'/'M3')
				args.push(0);
				args.push(0);
				args.push("S0");
				args.push(true);
			} else if ( args.length > 1 && typeof args[args.length - 2] === "number" ) {
				args.splice(args.length - 1, 0, 'S0');
			} else if ( args.length === 1 || !/S\d+/.test(args[args.length - 2]) ) { // ("A")
				args.push(true);
				args.push("thisM");
				args.push(0);
				args.push(0);
				args.push("S0");
				args.push(true);
			}
		} else if (typeof args[args.length - 1] === "number") { 
			if (args[args.length - 3] === "thisM" || /M\d+/.test(args[args.length - 3])) { // ("A", true, 'M3', 1, 2)
				args.push("S0");
				args.push(true);
			} else { // ("A", true, 1, 2)
				args.splice(args.length - 2, 0, "thisM");
				args.push("S0");
				args.push(true);
			}
		} else if ( typeof args[args.length - 2] === "number" ) {	
			args.splice(args.length - 1, 0, 'S0');
		} else if ( !/S\d+/.test(args[args.length - 2]) ) { // ("A", true)
			args.push("thisM");
			args.push(0);
			args.push(0);
			args.push("S0");
			args.push(true);
		}; 
		return args;
	};
	
	/*
	('Tom'*, 'A'*, bool/string/obj*, 1, 2, 'S0', 'cond'/bool)
	('Tom'*, 'A'*, bool/string/obj*, 1, 2, 'S0')
	('Tom'*, 'A'*, bool/string/obj*, 1, 2, 'cond'/bool)
	('Tom'*, 'A'*, bool/string/obj*, 1, 2)
	('Tom'*, 'A'*, 1, 2)
	('Tom'*, 'A'*, bool/string/obj*)
	('Tom'*, 'A'*)
	*/
	
	function autoSearchSwNFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 2) {
			args.push(true);
			args.push(0);
			args.push(0);
			args.push("S0");
			args.push(true);
		} else if (args.length == 3) {
			args.push(0);
			args.push(0);
			args.push("S0");
			args.push(true);
		} else if (args.length == 4) {
			args.splice(2, 0, true);
			args.push("S0");
			args.push(true);
		} else if (args.length == 5) {
			args.push("S0");
			args.push(true);
		} else if (args.length == 6) {
			if (/S\d+/.test(args[args.length - 1])) {
				args.push(true);
			} else {
				args.splice(5, 0, "S0");
			}			
		}
		return args;
	};
	
	/*
	('A', 'thisE'/eidNum, 'thisM', 'cond'/bool)
	('A', 'thisE'/eidNum, 'thisM')
	('A', 'thisE'/eidNum)
	('A')
	*/
	
	function autoGetSSwFastFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 1) {
			args.push(this._eventId);
			args.push("thisM");
			args.push(true);
		} else if (args.length == 2) {
			args.push("thisM");
			args.push(true);
		} else if (args.length == 3) {
			args.push(true);
		};
		if (args[1] == "thisE") {
			args[1] = this._eventId;
		};
		return args;
	};
	
	/*
	('A'*, 1, 2, 'thisE'/eidNum*, 'thisM'*, 'cond'/bool)
	('A'*, 1, 2, 'thisE'/eidNum*, 'thisM'*)
	('A'*, 1, 2, 'thisE'/eidNum*)
	('A'*, 1, 2)
	('A'*)
	*/
	
	function autoGetSSwFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 1) {
			args.push(0);
			args.push(0);
			args.push(this._eventId);
			args.push("thisM");
			args.push(true);
		} else if (args.length == 3) {
			args.push(this._eventId);
			args.push("thisM");
			args.push(true);
		} else if (args.length == 4) {
			args.push("thisM");
			args.push(true);
		} else if (args.length == 5) {
			args.push(true);
		}
		if (args[3] == "thisE") {
			args[3] = this._eventId;
		}
		return args;
	};
	
	/*
	(1, 2, 'S0', 'cond')
	(1, 2, 'S0')
	(1, 2, 'cond')
	(1, 2)
	()
	*/
	
	function autoGetN() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 0) {
			args.push(0);
			args.push(0);
			args.push("S0");
			args.push(true);
		} else if ( args.length == 2 ) {
			args.push("S0");
			args.push(true);
		} else if (args.length == 3) {
			if (/S\d+/.test(args[0])) {
				args.push(true);
			} else {
				args.splice(2, 0, "S0");
			}
		}
		return args;
	};
	
	/*
	('Tom'*, 'A'*, 1, 2, 'S0', 'cond')
	('Tom'*, 'A'*, 1, 2, 'S0')
	('Tom'*, 'A'*, 1, 2, cond')
	('Tom'*, 'A'*, 1, 2)
	('Tom'*, 'A'*)
	*/
	
	function autoGetSSVN() {
		args = autoPlgCmdFix.apply(this, arguments);
		if ( args.length === 2 ) {
			args.push(0);
			args.push(0);
			args.push('S0');
			args.push(true);
		} else if ( args.length === 4 ){
			args.push('S0');
			args.push(true);
		} else if ( args.length === 5 ) {
			if (/S\d+/.test(args[2])) {
				args.push(true);
			} else {
				args.splice(4, 0, "S0");
			}
		}
	}
		
	/*
	('A'*, bool/string/obj*, 'thisE'/eidNum*, 'thisM'/'M1'*, 'cond'/bool)
	('A'*, bool/string/obj*, 'thisE'/eidNum*, 'thisM'/'M1'*)
	('A'*, bool/string/obj*, 'thisE'/eidNum*)
	('A'*, bool/string/obj*)
	('A'*)
	*/
		
	function autoSetSSwFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 1) {
			args.push(true);
			args.push(this._eventId);
			args.push("thisM");
			args.push(true);
		} else if (args.length == 2) {
			args.push(this._eventId);
			args.push("thisM");
			args.push(true);
		} else if (args.length == 3) {
			args.push("thisM");
			args.push(true);
		} else if (args.length == 4) {
			args.push(true);
		};
		args[3] = get_mapId(args[3]);
		if (args[2] == "thisE") {
			args[2] = this._eventId;
		};
		return args;
	};
	
	/*
	('Tom'*, 'A'*, bool/string/obj*, 'S0', 'cond'/bool)
	('Tom'*, 'A'*, bool/string/obj*, 'S0')
	('Tom'*, 'A'*, bool/string/obj*,'cond'/bool)
	('Tom'*, 'A'*, bool/string/obj*)
	('Tom'*, 'A'*)
	*/
	
	function autoSSwNFix() {
		var args = autoPlgCmdFix.apply(this, arguments);
		if (args.length == 2) {
			args.push(true);
			args.push("S0");
			args.push(true);
		} else if (args.length == 3) {
			args.push("S0");
			args.push(true);
		} else if (args.length == 4) {
			if (/S\d+/.test(args[args.length - 1])) {
				args.push(true);
			} else {
				args.splice(3, 0, "S0");
			}			
		}
		return args;
	};
		
/* 
---------------------------------------------------------------------------------
    MAIN SEARCH ENGINE
---------------------------------------------------------------------------------
*/
	
	function search_condition() {
		var args = Array.prototype.slice.call(arguments);
		if (args.length == 1) {
			args.push(0);
			args.push(0);
			args.push("S0");
		} else if (args.length == 3) {
			args.push("S0");
		}
		var counted = [];
		var condition = args[0];
		var sourcestring = args[3];
		var sourcearray = create_source_array(sourcestring);
		var countedId = args[2];
		var countedNum = args[1];
		var eventId = 0;
		for (var i = 0; i < sourcearray.length; i++) {
			eventId = sourcearray[i];
			if (eval(condition)) {
				counted.push(eventId);
			}
		}
		counted_variables(counted, countedNum, countedId);
		return counted;
	};
 
	function search_name() {
		var inputcheck = autoSearchNFix.apply(this, arguments);
		var args = input_array(inputcheck, 4);
		var counted = [];
		var condition = args[args.length - 1];
		var sourcestring = args[args.length - 2];
		var sourcearray = create_source_array(sourcestring);
		var countedId = args[args.length - 3];
		var countedNum = args[args.length - 4];
		var eventId = 0;
		for (var i = 0; i < args.length - 4; i++) {
			for (var k = 0; k < sourcearray.length; k++) {
				eventId = sourcearray[k];
				if ($dataMap.events[eventId].name.includes(args[i]) && eval(condition)) {
					counted.push(eventId);
				}
			}
		};
		counted_variables(counted, countedNum, countedId);
		return counted;
	};

	function search_note() {
		var inputcheck = autoSearchNFix.apply(this, arguments);
		var args = input_array(inputcheck, 4);
		var counted = [];
		var condition = args[args.length - 1];
		var sourcestring = args[args.length - 2];
		var sourcearray = create_source_array(sourcestring);
		var countedId = args[args.length - 3];
		var countedNum = args[args.length - 4];
		var eventId = 0;
		for (var i = 0; i < args.length - 4; i++) {
			for (var k = 0; k < sourcearray.length; k++) {
				eventId = sourcearray[k];
				if ($dataMap.events[eventId].note) { 
					if ($dataMap.events[eventId].note.includes(args[i]) && eval(condition)) {
						counted.push(eventId);
					}
				}
			}
		};
		counted_variables(counted, countedNum, countedId);
		return counted;
	};
		
	function search_switch() {
		var args = autoSearchSwitchFix.apply(this, arguments);
		var counted = [];
		var condition = args[args.length - 1]; 
		var sourcestring = args[args.length - 2];
		var sourcearray = create_source_array(sourcestring); 
		var countedId = args[args.length - 3];
		var countedNum = args[args.length - 4];
		var mapPoint = args[args.length - 5];
		var mapId = get_mapId(mapPoint); 
		var value = args[args.length - 6];
		var swnames = [];
		for (var i = 0; i < args.length - 6; i++) {
			if (Array.isArray(args[i])) {
				for (var k = 0; k < args[i].length; k++) {
					if (typeof args[i][k] == "number") {
						args[i][k] = 'SELF SWITCH ' + args[i][k];
					}
					swnames.push(args[i][k]);
				}
			} else if (typeof args[i] == "number") {
				args[i] = 'SELF SWITCH ' + args[i];
				swnames.push(args[i]);
			} else {
				swnames.push(args[i]);
			}
		};
		for (var j = 0; j < swnames.length; j++) {
			if (Array.isArray(value)) {
				counted = identify_switch(swnames[j], mapId, counted, sourcearray, value[j], condition);
			} else {
				counted = identify_switch(swnames[j], mapId, counted, sourcearray, value, condition);
			}
		};
		counted_variables(counted, countedNum, countedId);
		return counted;
	};	
		
	function search_HimeSV() {
		var inputcheck = autoSearchSwitchFix.apply(this, arguments); 
		var args = input_array(inputcheck, 6); 
		var counted = [];
		var condition = args[args.length - 1];
		var sourcestring = args[args.length - 2];
		var sourcearray = create_source_array(sourcestring);
		var countedId = args[args.length - 3];
		var countedNum = args[args.length - 4];
		var mapPoint = args[args.length - 5];
		var mapId = get_mapId(mapPoint);
		var value = args[args.length - 6];
		for (var i = 0; i < args.length - 6; i++) {
			for (var k = 0; k < sourcearray.length; k++) {
				eventId = sourcearray[k];
				if ( Array.isArray(value) && $gameSelfVariables.value(mapId, eventId, args[i]) == value[i] && eval(condition) ) {
					counted.push(eventId);
				} else if ( $gameSelfVariables.value(mapId, eventId, args[i]) == value && eval(condition) ) {
					counted.push(eventId);		
				}
			}
		}
		counted_variables(counted, countedNum, countedId);
		return counted;
	};
	
	function search_YanflySV() {
		var inputcheck = autoSearchSwitchFix.apply(this, arguments); 
		var args = input_array(inputcheck, 6); 
		var counted = [];
		var condition = args[args.length - 1];
		var sourcestring = args[args.length - 2];
		var sourcearray = create_source_array(sourcestring);
		var countedId = args[args.length - 3];
		var countedNum = args[args.length - 4];
		var mapPoint = args[args.length - 5];
		var mapId = get_mapId(mapPoint);
		var value = args[args.length - 6]; 
		var swname = [];
		for (var j = 0; j < args.length - 6; j++) {
			for (var k = 0; k < sourcearray.length; k++) {
				eventId = sourcearray[k];
				if ( Array.isArray(value) && $gameSelfSwitches.value([mapId, eventId, 'SELF VARIABLE ' + args[j]]) == value[j] && eval(condition) ) {
					counted.push(eventId);
				} else if ( $gameSelfSwitches.value([mapId, eventId, 'SELF VARIABLE ' + args[j]]) == value && eval(condition) ) {
					counted.push(eventId);		
				}
			}
		};
		counted_variables(counted, countedNum, countedId);
		return counted;
	};

/* 
---------------------------------------------------------------------------------
    SEARCH IF NAME/NOTE X HAS SW/VAR Y OF Z VALUE
---------------------------------------------------------------------------------
*/
	
	function search_switch_name() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[5], true);
		var counted =  search_switch(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;
	};
	
	function search_switch_note() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[5], true);
		var counted =  search_switch(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;	
	};
	
	function search_HimeSV_name() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[5], true);
		var counted =  search_HimeSV(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;	
	};
	
	function search_HimeSV_note() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[5], true);
		var counted =  search_HimeSV(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;	
	};
	
	function search_YanflySV_name() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[5], true); 
		var counted =  search_YanflySV(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;	
	};
	
	function search_YanflySV_note() {
		var args = autoSearchSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[5], true);
		var counted =  search_YanflySV(args[1], args[2], "thisM", args[3], args[4], eventId, args[6]);
		return counted;	
	};
		
/* 
---------------------------------------------------------------------------------
    GET SELF SW/VAR VALUES PER EVENT, GET NAME/NOTELIST FROM SOURCE/ALL MAP
---------------------------------------------------------------------------------
*/
	
	function get_swswitch_fast() {
		var args = autoGetSSwFastFix.apply(this, arguments);
		var switchName = args[0];
		var eventId = args[1];
		var mapId = get_mapId(args[2]);
		var cond = args[3];	
		if (typeof switchName == "number") {
			switchName = 'SELF SWITCH ' + switchName;
		}
		if (eval(cond)) { 
			return $gameSelfSwitches.value([mapId, eventId, switchName]);
		} else {
			return false;
		}
	};
			
	function get_swswitch() {
		var args = autoGetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var countedId = args[2];
		var countedNum = args[1];
		var eventId = args[3];
		var mapId = get_mapId(args[4]);
		var cond = args[5];	
		var result = [];
		if (Array.isArray(switchName)) {
			for (var i = 0; i < switchName.length; i++) {
				if (typeof switchName[i] == "number") {
					switchName[i] = 'SELF SWITCH ' + switchName[i];
				}
			}
		} else if ( typeof switchName == "number" ) {
			switchName = 'SELF SWITCH ' + switchName;
		}
		if ( eval(cond) ) {
			if ( Array.isArray(switchName) ) {
				if ( Array.isArray(eventId) ) {
					if ( Array.isArray(mapId) ) {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfSwitches.value([mapId[i], eventId[i], switchName[i]]));
						}
					} else {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfSwitches.value([mapId, eventId[i], switchName[i]]));
						}
					}					
				} else if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId[i], eventId, switchName[i]]));
					}
				} else {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId, eventId, switchName[i]]));
					}
				}
			} else if ( Array.isArray(eventId) ) {
				if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId[i], eventId[i], switchName]));
					}
				} else {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId, eventId[i], switchName]));
					}
				}
			} else if ( Array.isArray(mapId) ) {
				for ( var i = 0; i < mapId.length; i++ ) {
					result.push($gameSelfSwitches.value([mapId[i], eventId, switchName]));
				}
			} else {
				result.push($gameSelfSwitches.value([mapId, eventId, switchName]));
			}
		};
		counted_variables(result, countedNum, countedId);
		return result;
	};
		
	function get_YanflySV() {
		var args = autoGetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var countedId = args[2];
		var countedNum = args[1];
		var eventId = args[3];
		var mapId = get_mapId(args[4]);
		var cond = args[5];	
		var result = [];
		if (Array.isArray(switchName)) {
			for (var i = 0; i < switchName.length; i++) {
				if (typeof switchName[i] == "number") {
					switchName[i] = 'SELF VARIABLE ' + switchName[i];
				}
			}
		} else if ( typeof switchName == "number" ) {
			switchName = 'SELF VARIABLE ' + switchName;
		};
		if ( eval(cond) ) {
			if ( Array.isArray(switchName) ) {
				if ( Array.isArray(eventId) ) {
					if ( Array.isArray(mapId) ) {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfSwitches.value([mapId[i], eventId[i], switchName[i]]));
						}
					} else {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfSwitches.value([mapId, eventId[i], switchName[i]]));
						}
					}					
				} else if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId[i], eventId, switchName[i]]));
					}
				} else {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId, eventId, switchName[i]]));
					}
				}
			} else if ( Array.isArray(eventId) ) {
				if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId[i], eventId[i], switchName]));
					}
				} else {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfSwitches.value([mapId, eventId[i], switchName]));
					}
				}
			} else if ( Array.isArray(mapId) ) {
				for ( var i = 0; i < mapId.length; i++ ) {
					result.push($gameSelfSwitches.value([mapId[i], eventId, switchName]));
				}
			} else {
				result.push($gameSelfSwitches.value([mapId, eventId, switchName]));
			}
		};
		counted_variables(result, countedNum, countedId);
		return result;
	};
		
	function get_HimeSV() {
		var args = autoGetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var countedId = args[2];
		var countedNum = args[1];
		var eventId = args[3];
		var mapId = get_mapId(args[4]);
		var cond = args[5];	
		var result = [];
		if ( eval(cond) ) {
			if ( Array.isArray(switchName) ) {
				if ( Array.isArray(eventId) ) {
					if ( Array.isArray(mapId) ) {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfVariables.value([mapId[i], eventId[i], switchName[i]]));
						}
					} else {
						for ( var i = 0; i < switchName.length; i++ ) {
							result.push($gameSelfVariables.value([mapId, eventId[i], switchName[i]]));
						}
					}					
				} else if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfVariables.value([mapId[i], eventId, switchName[i]]));
					}
				} else {
					for ( var i = 0; i < switchName.length; i++ ) {
						result.push($gameSelfVariables.value([mapId, eventId, switchName[i]]));
					}
				}
			} else if ( Array.isArray(eventId) ) {
				if ( Array.isArray(mapId) ) {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfVariables.value([mapId[i], eventId[i], switchName]));
					}
				} else {
					for ( var i = 0; i < eventId.length; i++ ) {
						result.push($gameSelfVariables.value([mapId, eventId[i], switchName]));
					}
				}
			} else if ( Array.isArray(mapId) ) {
				for ( var i = 0; i < mapId.length; i++ ) {
					result.push($gameSelfVariables.value([mapId[i], eventId, switchName]));
				}
			} else {
				result.push($gameSelfVariables.value([mapId, eventId, switchName]));
			}
		}; 
		counted_variables(result, countedNum, countedId);
		return result;
	};
		
	function get_names() {
		var args = autoGetN.apply(this, arguments);
		var countedId = args[1];
		var countedNum = args[0];
		var sourcearray = create_source_array(args[2]);
		var cond = args[3];
		var namelist = [];
		for (var i = 0; i < sourcearray.length; i++) {
			var eventId = sourcearray[i];
			if (eval(cond)) {
				namelist.push($dataMap.events[eventId].name);
			}
		};
		counted_variables(namelist, countedNum, countedId);
		return namelist;
	};
	
	function get_notes() {
		var args = autoGetN.apply(this, arguments);
		var countedId = args[1];
		var countedNum = args[0];
		var sourcearray = create_source_array(args[2]);
		var cond = args[3];
		var notelist = [];
		for (var i = 0; i < sourcearray.length; i++) {
			var eventId = sourcearray[i];
			if (eval(cond)) {
				notelist.push($dataMap.events[eventId].note);
			}
		};
		counted_variables(notelist, countedNum, countedId);
		return notelist;
	};

/* 
---------------------------------------------------------------------------------
    GET SELF SWITCH/VARIABLES USING NAMES/NOTES
---------------------------------------------------------------------------------
*/
	
	function get_ssw_names() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_swswitch(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
	function get_ssw_notes() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_swswitch(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
	function get_YanflySV_names() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_YanflySV(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
	function get_YanflySV_notes() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_YanflySV(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
	function get_HimeSV_names() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_HimeSV(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
	function get_HimeSV_notes() {
		var args = autoGetSSVN.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[4], true);
		var result = [];
		for ( var i = 0; i < eventId.length; i++ ) {
			result.push(get_HimeSV(args[1], args[2], args[3], eventId[i], "thisM", args[5]));
		};
	};
	
/* 
---------------------------------------------------------------------------------
    MASS SET SWITCHES & VARIABLES
---------------------------------------------------------------------------------
*/

	function set_swswitch_fast() {
		var args = autoSetSSwFix.apply(this, arguments);
		var switchName = args[0];
		if (typeof switchName == "number") {
			switchName = 'SELF SWITCH ' + switchName;
		}
		var value = args[1];
		var eventId = args[2];
		var mapId = get_mapId(args[3]);
		var cond = args[4];	
		if (eval(cond)) {
			$gameSelfSwitches.setValue([mapId, eventId, switchName], value);
		}
	};
		
	function set_self_switch(){
		var args = autoSetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var value = args[1];
		var eventId = args[2];
		var mapPoint = args[3];
		var mapId = get_mapId(mapPoint);
		var cond = args[4];
		var SnIsArray = Array.isArray(switchName);
		var valueIsArray = Array.isArray(value);
		var eIdIsArray = Array.isArray(eventId);
		var mIdIsArray = Array.isArray(mapId); 
		if (SnIsArray) {
			for (var k = 0; k < switchName.length; k++) {
				if (typeof switchName[k] == "number") {
					switchName[k] = 'SELF SWITCH ' + switchName[k];
				}
			}
		} else if (typeof switchName == "number") {
			switchName = 'SELF SWITCH ' + switchName;
		}
		if (SnIsArray) {
			for (var i = 0; i < switchName.length; i++) {
				if (valueIsArray && eval(cond)) {
					if (eIdIsArray) {
						if (mIdIsArray) {
							$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName[i]], value[i]);
						} else {
							$gameSelfSwitches.setValue([mapId, eventId[i], switchName[i]], value[i]);
						}
					} else if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId, switchName[i]], value[i]);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId, switchName[i]], value[i]);
					}
				} else if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName[i]], value);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId[i], switchName[i]], value);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName[i]], value);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId, switchName[i]], value);
				}
			}
		} else if (valueIsArray) {
			for (var i = 0; i < value.length; i++) {
				if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName], value[i]);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId[i], switchName], value[i]);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName], value[i]);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId, switchName], value[i]);
				}
			}
		} else if (eIdIsArray) {
			for (var i = 0; i < eventId.length; i++) {
				if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName], value);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId[i], switchName], value);
				}
			}	
		} else if (mIdIsArray) {
			for (var i = 0; i < mapId.length; i++) {
				if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName], value);
				}
			}	
		} else if (eval(cond)) {
			$gameSelfSwitches.setValue([mapId, eventId, switchName], value);
		}
		
	};
		
	function set_HimeSV(){
		var args = autoSetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var value = args[1];
		var eventId = args[2];
		var mapId = args[3];
		var cond = args[4];
		var SnIsArray = Array.isArray(switchName);
		var valueIsArray = Array.isArray(value);
		var eIdIsArray = Array.isArray(eventId);
		var mIdIsArray = Array.isArray(mapId); 
		if (SnIsArray) {
			for (var i = 0; i < switchName.length; i++) {
				if (valueIsArray && eval(cond)) {
					if (eIdIsArray) {
						if (mIdIsArray) {
							$gameSelfVariables.setValue(mapId[i], eventId[i], switchName[i], value[i]);
						} else {
							$gameSelfVariables.setValue(mapId, eventId[i], switchName[i], value[i]);
						}
					} else if (mIdIsArray) {
						$gameSelfVariables.setValue(mapId[i], eventId, switchName[i], value[i]);
					} else {
						$gameSelfVariables.setValue(mapId, eventId, switchName[i], value[i]);
					}
				} else if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfVariables.setValue(mapId[i], eventId[i], switchName[i], value);
					} else {
						$gameSelfVariables.setValue(mapId, eventId[i], switchName[i], value);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfVariables.setValue(mapId[i], eventId, switchName[i], value);
				} else if (eval(cond)) {
					$gameSelfVariables.setValue(mapId, eventId, switchName[i], value);
				}
			}
		} else if (valueIsArray) {
			for (var i = 0; i < value.length; i++) {
				if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfVariables.setValue(mapId[i], eventId[i], switchName, value[i]);
					} else {
						$gameSelfVariables.setValue(mapId, eventId[i], switchName, value[i]);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfVariables.setValue(mapId[i], eventId, switchName, value[i]);
				} else if (eval(cond)) {
					$gameSelfVariables.setValue(mapId, eventId, switchName, value[i]);
				}
			}
		} else if (eIdIsArray) {
			for (var i = 0; i < eventId.length; i++) {
				if (mIdIsArray && eval(cond)) {
					$gameSelfVariables.setValue(mapId[i], eventId[i], switchName, value);
				} else if (eval(cond)) {
					$gameSelfVariables.setValue(mapId, eventId[i], switchName, value);
				}
			}	
		} else if (mIdIsArray) {
			for (var i = 0; i < mapId.length; i++) {
				if (eval(cond)) {
					$gameSelfVariables.setValue(mapId[i], eventId, switchName, value);
				}
			}	
		} else if (eval(cond)) {
			$gameSelfVariables.setValue(mapId, eventId, switchName, value);
		}
		
	};	
	
	function set_YanflySV(){
		var args = autoSetSSwFix.apply(this, arguments);
		var switchName = args[0];
		var value = args[1];
		var eventId = args[2];
		var mapPoint = args[3];
		var mapId = get_mapId(mapPoint);
		var cond = args[4];
		var SnIsArray = Array.isArray(switchName); console.log(SnIsArray);
		var valueIsArray = Array.isArray(value); console.log(valueIsArray);
		var eIdIsArray = Array.isArray(eventId);
		var mIdIsArray = Array.isArray(mapId); 
		if (SnIsArray) {
			for (var k = 0; k < switchName.length; k++) {
				if (typeof switchName[k] == "number") {
					switchName[k] = 'SELF VARIABLE ' + switchName[k];
				}
			}
		} else if (typeof switchName == "number") {
			switchName = 'SELF VARIABLE ' + switchName;
		};
		if (SnIsArray) {
			for (var i = 0; i < switchName.length; i++) {
				if (valueIsArray && eval(cond)) {
					if (eIdIsArray) {
						if (mIdIsArray) {
							$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName[i]], value[i]);
						} else {
							$gameSelfSwitches.setValue([mapId, eventId[i], switchName[i]], value[i]);
						}
					} else if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId, switchName[i]], value[i]);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId, switchName[i]], value[i]); console.log(switchName[i] + " " + value[i]);
					}
				} else if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName[i]], value);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId[i], switchName[i]], value);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName[i]], value);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId, switchName[i]], value);
				}
			}
		} else if (valueIsArray) {
			for (var i = 0; i < value.length; i++) {
				if (eIdIsArray && eval(cond)) {
					if (mIdIsArray) {
						$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName], value[i]);
					} else {
						$gameSelfSwitches.setValue([mapId, eventId[i], switchName], value[i]);
					}
				} else if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName], value[i]);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId, switchName], value[i]);
				}
			}
		} else if (eIdIsArray) {
			for (var i = 0; i < eventId.length; i++) {
				if (mIdIsArray && eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId[i], switchName], value);
				} else if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId, eventId[i], switchName], value);
				}
			}	
		} else if (mIdIsArray) {
			for (var i = 0; i < mapId.length; i++) {
				if (eval(cond)) {
					$gameSelfSwitches.setValue([mapId[i], eventId, switchName], value);
				}
			}	
		} else if (eval(cond)) {
			$gameSelfSwitches.setValue([mapId, eventId, switchName], value);
		}		
	};
	
/* 
---------------------------------------------------------------------------------
    MASS SET SWITCHES & VARIABLES BY NAME/NOTE
---------------------------------------------------------------------------------
*/
	
	function set_self_switch_name(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_self_switch(args[1], args[2], eventId[i], "thisM", args[4]);
		};		
	};

	function set_self_switch_note(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_self_switch(args[1], args[2], eventId[i], "thisM", args[4]);
		};	
	};
	
	function set_HimeSV_name(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_HimeSV(args[1], args[2], eventId[i], "thisM", args[4]);
		};
	};

	function set_HimeSV_note(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_HimeSV(args[1], args[2], eventId[i], "thisM", args[4]);
		};
	};
	
	function set_YanflySV_name(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_name(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_YanflySV(args[1], args[2], eventId[i], "thisM", args[4]);
		};
	};

	function set_YanflySV_note(){
		var args = autoSSwNFix.apply(this, arguments);
		var eventId = search_note(args[0], 0, 0, args[3], true);
		for ( var i = 0; i < eventId.length; i++ ) {
			set_YanflySV(args[1], args[2], eventId[i], "thisM", args[4]);
		};
	};

/* 
---------------------------------------------------------------------------------
    END MAIN FUNCTION
---------------------------------------------------------------------------------
*/

})();

/* 
---------------------------------------------------------------------------------
    CONDITIONAL BRANCH SEARCH
---------------------------------------------------------------------------------
*/

function Search() {};

	// Search if Name exists in Map from Source with Condition
	Search.Names = function(name, source, cond) {
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchNames(name, 0, 0, source, cond).length > 0) { return true; }
		return false;
	};
	
	// Search if Note exists in Map from Source with Condition
	Search.Notes = function(note, source, cond) {
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchNotes(note, 0, 0, source, cond).length > 0) { return true; }
		return false;
	};
	
	// Search if Self Switch X is ON/OFF/value in any Map from Source with Condition
	Search.SelfSw = function(swName, value, mapId, source, cond) {
		if (typeof value === 'undefined') { value = true; };
		if (typeof mapId === 'undefined') { mapId = "thisM"; };
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; }; 
		if ($gameTemp.SearchSSw(swName, value, mapId, 0, 0, source, cond).length > 0) { return true; }
		return false;
	};
	
	// Search if Hime Self Variable X is Y in any Map from Source with Condition
	Search.HimeSV = function(swName, value, mapId, source, cond) {
		if (typeof mapId === 'undefined') { mapId = "thisM"; };
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchHimeSV(swName, value, mapId, 0, 0, source, cond).length > 0) { return true; }
		return false;
	};	
	
	// Search if Yanfly Self Variable X is Y in any Map from Source with Condition
	Search.YanflySV = function(swName, value, mapId, source, cond) {
		if (typeof mapId === 'undefined') { mapId = "thisM"; };
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchYanflySV(swName, value, mapId, 0, 0, source, cond).length > 0) { return true; }
		return false;
	};
	
	// Search if Event Name has Self Switch X ON/OFF/value in Map from Source with Condition
	Search.NameSw = function(eName, swName, value, source, cond) {
		if (typeof value === 'undefined') { value = true; };
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchSSwName(eName, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
	
	// Search if Event Note has Self Switch X ON/OFF/value in Map from Source with Condition
	Search.NoteSw = function(eNote, swName, value, source, cond) { 
		if (typeof value === 'undefined') { value = true; };
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchSSwNote(eNote, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
	
	// Search if Event Name has Yanfly Self Variable X of value Y in Map from Source with Condition
	Search.YanflySVName = function(eName, swName, value, source, cond) {
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchYanflySVName(eName, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
	
	// Search if Event Note has Yanfly Self Variable X of value Y in Map from Source with Condition
	Search.YanflySVNote = function(eNote, swName, value, source, cond) { 
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchYanflySVNote(eNote, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
	
	// Search if Event Name has Hime Self Variable X of value Y in Map from Source with Condition
	Search.HimeSVName = function(eName, swName, value, source, cond) {
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchHimeSVName(eName, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
	
	// Search if Event Note has Hime Self Variable X of value Y in Map from Source with Condition
	Search.HimeSVNote = function(eNote, swName, value, source, cond) { 
		if (typeof source === 'undefined') { source = "S0"; };
		if (typeof cond === 'undefined') { cond = true; };
		if ($gameTemp.SearchHimeSVNote(eNote, swName, value, 0, 0, source, cond).length > 0) { return true; }
		return false;		
	};
