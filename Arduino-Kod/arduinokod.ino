#include<MFRC522.h>
#include<SPI.h>

MFRC522 rfid(10, 9);

void setup()
{
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
}
void loop()
{
  if (rfid.PICC_IsNewCardPresent())
  {
    if (rfid.PICC_ReadCardSerial())
    {
      Serial.print(rfid.uid.uidByte[0]);
      Serial.print("");
      Serial.print(rfid.uid.uidByte[1]);
      Serial.print("");
      Serial.print(rfid.uid.uidByte[2]);
      Serial.print("");
      Serial.print(rfid.uid.uidByte[3]);
      Serial.print("");
      Serial.println(rfid.uid.uidByte[4]);
    }
    rfid.PICC_HaltA();
  }
}
