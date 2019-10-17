WORKS WITH KIBANA 7.x

Install Steps:
1. Specify your desired banner content
  
With Linux
```
sed -i "s/CHANGE ME/YOUR DESIRED BANNER CONTENT/g" core*
``` 
    
With OSX    
```
sed -i '' "s/CHANGE ME/YOUR DESIRED BANNER CONTENT/g" core*
```

2. [Optional] Change the banner color from yellow to something else by making changes to `core.dark.css` and `core.light.css`

With Linux
```
sed -i "s/yellow/YOUR COLOR/g" core*
``` 
    
With OSX    
```
sed -i '' "s/yellow/YOUR COLOR/g" core*
```

3. Copy `core.light.css` and `core.dark.css` to `$KIBANA_HOME/built_assets/css/`
4. Copy `index_light.css` and `index_dark.css` to `$KIBANA_HOME/built_assets/css/plugins/kibana/`
5. Copy `eui_theme_light.css` and `eui_theme_dark.css` to `$KIBANA_HOME/node_modules/@elastic/eui/dist/`
6. Restart Kibana

