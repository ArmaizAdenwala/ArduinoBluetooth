#include <Servo.h>
#include <SoftwareSerial.h>

Servo myservo;

SoftwareSerial BluetoothModule(2, 3);

int BluetoothData;

void setup()
{
  Serial.begin(9600);
  BluetoothModule.begin(9600); 
  Serial.println("Bluetooth open");
  myservo.attach(5);
  myservo.write(1);
}

void  loop()
{
  if (BluetoothModule.available()) {
    BluetoothData = BluetoothModule.read();
    if(BluetoothData == '1') {
        myservo.write(179);
        delay(2000);
        myservo.write(1);
      }
     Serial.write(BluetoothData);
  }
}
