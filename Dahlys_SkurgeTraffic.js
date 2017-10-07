/*:
 * @plugindesc Traffic Light Block Car
 * @author Dahlys
 *
 * @param Vehicle Name
 * @desc Name of Events to Block
 * @default car
 *
 * @param Self Switch Red
 * @desc What self switch means a traffic light is red?
 * @default A 
 *
 * @param Traffic Light Names
 * @desc Event Names for each type Traffic Light
 * Separate names by commas, no spaces
 * @default TL NS,TL EW
 *
 * @param Car Blocker Names
 * @desc Event Names for each type of Blocker
 * Separate names by commas, no spaces 
 * @default Block NS,Block EW
 *
 * @help
 * ==============================================================================
 * Traffic Light Block Car
 * ============================================================================== 
 * 
 * Plugin Parameters:
 *
 * Vehicle Name: 'car' by default, case insensitive. Works as long as the event 
 * name contains 'car'. i.e. 'Car X', 'theCAR', 'carBus' are all cars! If you 
 * change this to 'vehicle', all events named 'vehicle' will be blocked, but not 
 * 'car'.
 * 
 * Self Switch Red: Which self switch being ON means a traffic light is red? 'A' 
 * by default.
 * 
 * Traffic Light Names: Traffic lights must be in groups. Each group must share
 * a common light switch timer. You can have as many groups as you want. Names
 * for different groups are separated by a comma without spaces.
 * 
 * Car Blocker Names: Same as traffic light names. Car Blocker Name order must
 * correspond with the order of Traffic Light Names. i.e. Traffic Light NS 
 * activates Car Blocker NS. Must have the same number of entries as TLN, or the
 * plugin will glitch.
 * 
 */

(function() { 

/* 
----------------------------------------------------------------------------------
		PLUGIN PARAMETERS
----------------------------------------------------------------------------------
*/	
	
	var parameters = PluginManager.parameters('Dahlys_SkurgeTraffic');
	var vehicleName = String(parameters['Vehicle Name']) || 'car';
	var redSelfSw = String(parameters['Self Switch Red']) || 'A';
	var tfnames = String(parameters['Traffic Light Names']) || 'TL NS,TL EW';
	var blocknames = String(parameters['Car Blocker Names']) || 'Block NS,Block EW';

/* 
----------------------------------------------------------------------------------
		OVERWRITE GAME FUNCTION .CANPASS
----------------------------------------------------------------------------------
*/	
	
	var originalcanPass = Game_CharacterBase.prototype.canPass; //overwriting base canPass
	Game_CharacterBase.prototype.canPass = function(x, y, d) {	
		originalcanPass.call(this); //overwriting base canPass
		var x2 = $gameMap.roundXWithDirection(x, d);
		var y2 = $gameMap.roundYWithDirection(y, d);
		if (!$gameMap.isValid(x2, y2)) {
			return false; //hit the edges of the map
		}
		if (this.isThrough() || this.isDebugThrough()) {
			return true; //this event is set to Through
		}
		if (!this.isMapPassable(x, y, d)) {
			return false; //hit a wall
		}
		if (this.isCollidedWithCharacters(x2, y2)) {
			//THE FOLLOWING IF/ELSE STATEMENT IS THE ONLY CHANGE TO THIS FUNCTION
			if (this.isCollidedWithEvents(x2, y2)) { 
				return canPass_block(this, x2, y2); //hit an event
			} else {			
			return false; //hit a player vehicle
			}
		}
		return true;	
	};

/* 
----------------------------------------------------------------------------------
		TRAFFIC LIGHT
----------------------------------------------------------------------------------
*/	
	
	function canPass_block(obj, x2, y2) { 
		var blocker = $gameMap.eventsXy(x2, y2)[0]; //get neighboring event		
		var tlightIds = make_tfidarray(tfnames); //get ids of each type of traffic light
		var blockNames = blocknames.split(","); //get map blocker names
		var regex = new RegExp(vehicleName, 'i'); //case insensitive car name matching
		var passerName = (obj._eventId) ? $dataMap.events[obj._eventId].name : $dataActors[1].name; //set name of passer to event1 name or player name
		var blockerName = (blocker._eventId) ? $dataMap.events[blocker._eventId].name : $dataActors[1].name;//set name of blocker to event2 name or player name	
		for (var i = 0; i < tlightIds.length; i++) {
			if ((blockerName.match(regex) && passerName === blockNames[i]) || (blockerName === blockNames[i] && passerName.match(regex))) { //car collided into blocker or blocker collided into car
				if ($gamePlayer.x === x2 && $gamePlayer.y === y2) {				
					return false; //failsafe in case player is standing on top of blocker
				}
				if ($gameMap.eventsXy(x2, y2).length > 1 && !$gameMap.eventsXy(x2, y2)[1].isThrough()) {				
					return false; //failsafe in case a non-through event is standing on top of blocker
				}			
				if ($gameSelfSwitches.value([$gameMap.mapId(), tlightIds[i], redSelfSw])) {
					return false; //traffic light is RED, block it!
				} else {
					return true; //traffic light is GREEN, let it pass!
				}
			} else if (passerName === blockNames[i] || blockerName === blockNames[i]) { 
				return true; //anyone but cars can pass through blocker
			}
		}		
		return false; //non-traffic related collision event		
	}
	
/* 
----------------------------------------------------------------------------------
		OTHERS
----------------------------------------------------------------------------------
*/
	
	function search_name(name) {
		var regex = new RegExp(name, 'i'); //case insensitive name matching
		for (var eId = 1; eId < $dataMap.events.length; eId++) {
			if ($dataMap.events[eId] != null) {
				if ($dataMap.events[eId].name.match(regex)) {
					return eId; //if event exists on map and the name matches, the function will return the eventId of the first match
				}
			}
		}
		return 0;
	};
	
	function make_tfidarray(tfnames) {
		var tfnamearray = tfnames.split(","); //split traffic light names up using commas
		var tfids = [];
		for (var i = 0; i < tfnamearray.length; i++) {
			tfids.push(search_name(tfnamearray[i]));
		}
		return tfids; //array containing eventIds examples from each traffic light type
	}
		
})();	