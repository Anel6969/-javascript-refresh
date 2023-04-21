/*
	Écrivez une fonction qui prend en entrée une température en degrés Celsius et la convertit en degrés Fahrenheit.

	°F = (°C × 9/5) + 32
*/

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function factorielle3(n) {
	if (n === 0) {
	  return 1;
	} else {
	  return n * factorielle(n-1);
	}
  }