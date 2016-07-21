package react.plus.com.android_react;

import android.app.Activity;
import android.view.ViewParent;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactRootView;

/**
 * Created by plus on 16/7/21.
 */
public class RNCacheViewManager {

    public static ReactRootView mRootView = null;


    public static void createReactInstanceManager(Activity act,String name) {

        mRootView = new ReactRootView(act);
        mRootView.startReactApplication(
                ((ReactApplication) act.getApplication()).getReactNativeHost().getReactInstanceManager(),
                name,
                null);
    }

    public static void onDestroy() {
        try {
            ViewParent parent = mRootView.getParent();
            if (parent != null)
                ((android.view.ViewGroup) parent).removeView(mRootView);
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }
}
