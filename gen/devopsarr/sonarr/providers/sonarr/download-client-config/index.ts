// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto Redownload Failed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config#auto_redownload_failed DownloadClientConfigA#auto_redownload_failed}
  */
  readonly autoRedownloadFailed: boolean | cdktf.IResolvable;
  /**
  * Enable Completed Download Handling flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config#enable_completed_download_handling DownloadClientConfigA#enable_completed_download_handling}
  */
  readonly enableCompletedDownloadHandling: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config sonarr_download_client_config}
*/
export class DownloadClientConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_download_client_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientConfigA to import
  * @param importFromId The id of the existing DownloadClientConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_download_client_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/download_client_config sonarr_download_client_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_download_client_config',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRedownloadFailed = config.autoRedownloadFailed;
    this._enableCompletedDownloadHandling = config.enableCompletedDownloadHandling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_redownload_failed - computed: false, optional: false, required: true
  private _autoRedownloadFailed?: boolean | cdktf.IResolvable; 
  public get autoRedownloadFailed() {
    return this.getBooleanAttribute('auto_redownload_failed');
  }
  public set autoRedownloadFailed(value: boolean | cdktf.IResolvable) {
    this._autoRedownloadFailed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedownloadFailedInput() {
    return this._autoRedownloadFailed;
  }

  // download_client_working_folders - computed: true, optional: false, required: false
  public get downloadClientWorkingFolders() {
    return this.getStringAttribute('download_client_working_folders');
  }

  // enable_completed_download_handling - computed: false, optional: false, required: true
  private _enableCompletedDownloadHandling?: boolean | cdktf.IResolvable; 
  public get enableCompletedDownloadHandling() {
    return this.getBooleanAttribute('enable_completed_download_handling');
  }
  public set enableCompletedDownloadHandling(value: boolean | cdktf.IResolvable) {
    this._enableCompletedDownloadHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCompletedDownloadHandlingInput() {
    return this._enableCompletedDownloadHandling;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_redownload_failed: cdktf.booleanToTerraform(this._autoRedownloadFailed),
      enable_completed_download_handling: cdktf.booleanToTerraform(this._enableCompletedDownloadHandling),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_redownload_failed: {
        value: cdktf.booleanToHclTerraform(this._autoRedownloadFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_completed_download_handling: {
        value: cdktf.booleanToHclTerraform(this._enableCompletedDownloadHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
