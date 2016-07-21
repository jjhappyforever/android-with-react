package react.plus.com.android_react;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.tv_titlebar_setting).setOnClickListener(this);


        //加载RN module
        RNCacheViewManager.createReactInstanceManager(this, "SettingActivity");
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.tv_titlebar_setting) {
            Intent intent = new Intent(this, SettingActivity.class);
            startActivity(intent);
        }
    }
}
