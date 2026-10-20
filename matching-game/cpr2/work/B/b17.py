from apply import *
d=load()
c=d['correlates'][20]
assert c['name']=='Post-thrombotic syndrome'
c['avoid']={'management':['Chronic venous insufficiency']}
save(d)
print(c['avoid'])
