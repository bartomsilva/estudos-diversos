from typing import TextIO


num1=0

def cn():
    canal="escopo local"
    global testanDo 
    testanDo = "escopo global"

cn()
print(testanDo)