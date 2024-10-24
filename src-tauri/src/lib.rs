use crate::almanax::get_almanax;
use crate::conf::{get_conf, set_conf, Conf};
use crate::guides::{download_guide_from_server, get_guides, get_guides_from_server, Guides};
use crate::id::new_id;
use tauri::Manager;

mod almanax;
mod conf;
mod error;
mod guides;
mod id;
mod json;
mod tauri_api;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_window_state::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            match Conf::ensure(&app.path()) {
                Err(err) => {
                    eprintln!("Failed to ensure conf: {:?}", err);
                }
                Ok(_) => {}
            }

            match Guides::ensure(&app.path()) {
                Err(err) => {
                    eprintln!("Failed to ensure download: {:?}", err);
                }
                Ok(_) => {}
            }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_conf,
            set_conf,
            new_id,
            get_guides_from_server,
            get_guides,
            download_guide_from_server,
            get_almanax
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
