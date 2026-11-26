with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find("function loadUserProfile()")
if pos != -1:
    print(js[pos:pos+1500])
