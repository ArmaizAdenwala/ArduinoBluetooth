#include <Servo.h>
#include <SPI.h>
#include <MFRC522.h>
#include <SoftwareSerial.h>

//F720DF red
//F7A05F green
// F740BF off
// F7E01F - white
// F7609F - blue
Servo myservo;

SoftwareSerial EEBlue(2, 3);

#define RedLed A2
#define BlueLed A1
#define GreenLed A3

#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN); 
int BluetoothData;

int piezoPin = 4;
void setup()
{
  
  Serial.begin(9600);
  EEBlue.begin(9600); 
  Serial.println("The bluetooth gates are open.\n Connect to HC-05 from any other bluetooth device with 1234 as pairing key!.");
  myservo.attach(5);
  myservo.write(1);
  pinMode(RedLed, OUTPUT);
  pinMode(BlueLed, OUTPUT);
  pinMode(GreenLed, OUTPUT);
  SPI.begin();
  mfrc522.PCD_Init();
}

void  loop()
{
  if (EEBlue.available()) {
    BluetoothData = EEBlue.read();
    if(BluetoothData == '1') {
      Serial.write("done");
        digitalWrite(BlueLed, LOW);
        digitalWrite(GreenLed, HIGH);
        myservo.write(179);
        tone(piezoPin, 300, 1000);
        delay(2000);
        myservo.write(1);
        digitalWrite(GreenLed, LOW);
      }
     Serial.write(BluetoothData);  
  }
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }

  digitalWrite(BlueLed, HIGH);
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  content.toUpperCase();
  if (content.substring(1) == "C1 6B 25 D9" || content.substring(1) == "70 76 6F A3")
  {
    digitalWrite(BlueLed, LOW);
    digitalWrite(GreenLed, HIGH);
    myservo.write(179);
    tone(piezoPin, 300, 1000);
    delay(2000);
    myservo.write(1);
    digitalWrite(GreenLed, LOW);
  }
  
  else   {
   digitalWrite(BlueLed, LOW);
   digitalWrite(RedLed, HIGH);
   delay(3000);
   digitalWrite(RedLed, LOW);
  }
  
}
