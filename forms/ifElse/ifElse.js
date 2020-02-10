//Creating out Variables


//NSB.MsgBox() Outputs
if (upperCaseUserState === 'NE' && userTemperature <= 32) {
NSB.MsgBox(upperCaseUserName+", "+messages[0])
} else if (upperCaseUserState === 'NE' && userTemperature > 32 && userTemperature <= 50) {
  NSB.MsgBox(upperCaseUserName+", "+messages[1])
} else if (upperCaseUserState === 'FL' && userTemperature <= 50 && userTemperature >= 32) {
  NSB.MsgBox(upperCaseUserName+", "+messages[2])
} else if (upperCaseUserState === 'FL' && userTemperature > 50 && userTemperature <= 70) {
  NSB.MsgBox(upperCaseUserName+", "+messages[3])
}

