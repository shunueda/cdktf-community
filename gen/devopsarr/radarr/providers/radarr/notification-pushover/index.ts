// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPushoverConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#api_key NotificationPushover#api_key}
  */
  readonly apiKey: string;
  /**
  * List of devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#devices NotificationPushover#devices}
  */
  readonly devices?: string[];
  /**
  * Expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#expire NotificationPushover#expire}
  */
  readonly expire?: number;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#include_health_warnings NotificationPushover#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationPushover name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#name NotificationPushover#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_application_update NotificationPushover#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_download NotificationPushover#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_grab NotificationPushover#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_health_issue NotificationPushover#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_health_restored NotificationPushover#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_manual_interaction_required NotificationPushover#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On movie added flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_movie_added NotificationPushover#on_movie_added}
  */
  readonly onMovieAdded?: boolean | cdktf.IResolvable;
  /**
  * On movie delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_movie_delete NotificationPushover#on_movie_delete}
  */
  readonly onMovieDelete: boolean | cdktf.IResolvable;
  /**
  * On movie file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_movie_file_delete NotificationPushover#on_movie_file_delete}
  */
  readonly onMovieFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On movie file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_movie_file_delete_for_upgrade NotificationPushover#on_movie_file_delete_for_upgrade}
  */
  readonly onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#on_upgrade NotificationPushover#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#priority NotificationPushover#priority}
  */
  readonly priority?: number;
  /**
  * Retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#retry NotificationPushover#retry}
  */
  readonly retry?: number;
  /**
  * Sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#sound NotificationPushover#sound}
  */
  readonly sound?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#tags NotificationPushover#tags}
  */
  readonly tags?: number[];
  /**
  * User key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#user_key NotificationPushover#user_key}
  */
  readonly userKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover radarr_notification_pushover}
*/
export class NotificationPushover extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_notification_pushover";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPushover resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPushover to import
  * @param importFromId The id of the existing NotificationPushover that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPushover to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_notification_pushover", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushover radarr_notification_pushover} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPushoverConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPushoverConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_notification_pushover',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._devices = config.devices;
    this._expire = config.expire;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onMovieAdded = config.onMovieAdded;
    this._onMovieDelete = config.onMovieDelete;
    this._onMovieFileDelete = config.onMovieFileDelete;
    this._onMovieFileDeleteForUpgrade = config.onMovieFileDeleteForUpgrade;
    this._onUpgrade = config.onUpgrade;
    this._priority = config.priority;
    this._retry = config.retry;
    this._sound = config.sound;
    this._tags = config.tags;
    this._userKey = config.userKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // devices - computed: true, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_health_warnings - computed: true, optional: true, required: false
  private _includeHealthWarnings?: boolean | cdktf.IResolvable; 
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }
  public set includeHealthWarnings(value: boolean | cdktf.IResolvable) {
    this._includeHealthWarnings = value;
  }
  public resetIncludeHealthWarnings() {
    this._includeHealthWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHealthWarningsInput() {
    return this._includeHealthWarnings;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_application_update - computed: true, optional: true, required: false
  private _onApplicationUpdate?: boolean | cdktf.IResolvable; 
  public get onApplicationUpdate() {
    return this.getBooleanAttribute('on_application_update');
  }
  public set onApplicationUpdate(value: boolean | cdktf.IResolvable) {
    this._onApplicationUpdate = value;
  }
  public resetOnApplicationUpdate() {
    this._onApplicationUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onApplicationUpdateInput() {
    return this._onApplicationUpdate;
  }

  // on_download - computed: true, optional: true, required: false
  private _onDownload?: boolean | cdktf.IResolvable; 
  public get onDownload() {
    return this.getBooleanAttribute('on_download');
  }
  public set onDownload(value: boolean | cdktf.IResolvable) {
    this._onDownload = value;
  }
  public resetOnDownload() {
    this._onDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDownloadInput() {
    return this._onDownload;
  }

  // on_grab - computed: true, optional: true, required: false
  private _onGrab?: boolean | cdktf.IResolvable; 
  public get onGrab() {
    return this.getBooleanAttribute('on_grab');
  }
  public set onGrab(value: boolean | cdktf.IResolvable) {
    this._onGrab = value;
  }
  public resetOnGrab() {
    this._onGrab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onGrabInput() {
    return this._onGrab;
  }

  // on_health_issue - computed: true, optional: true, required: false
  private _onHealthIssue?: boolean | cdktf.IResolvable; 
  public get onHealthIssue() {
    return this.getBooleanAttribute('on_health_issue');
  }
  public set onHealthIssue(value: boolean | cdktf.IResolvable) {
    this._onHealthIssue = value;
  }
  public resetOnHealthIssue() {
    this._onHealthIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthIssueInput() {
    return this._onHealthIssue;
  }

  // on_health_restored - computed: true, optional: true, required: false
  private _onHealthRestored?: boolean | cdktf.IResolvable; 
  public get onHealthRestored() {
    return this.getBooleanAttribute('on_health_restored');
  }
  public set onHealthRestored(value: boolean | cdktf.IResolvable) {
    this._onHealthRestored = value;
  }
  public resetOnHealthRestored() {
    this._onHealthRestored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthRestoredInput() {
    return this._onHealthRestored;
  }

  // on_manual_interaction_required - computed: true, optional: true, required: false
  private _onManualInteractionRequired?: boolean | cdktf.IResolvable; 
  public get onManualInteractionRequired() {
    return this.getBooleanAttribute('on_manual_interaction_required');
  }
  public set onManualInteractionRequired(value: boolean | cdktf.IResolvable) {
    this._onManualInteractionRequired = value;
  }
  public resetOnManualInteractionRequired() {
    this._onManualInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onManualInteractionRequiredInput() {
    return this._onManualInteractionRequired;
  }

  // on_movie_added - computed: true, optional: true, required: false
  private _onMovieAdded?: boolean | cdktf.IResolvable; 
  public get onMovieAdded() {
    return this.getBooleanAttribute('on_movie_added');
  }
  public set onMovieAdded(value: boolean | cdktf.IResolvable) {
    this._onMovieAdded = value;
  }
  public resetOnMovieAdded() {
    this._onMovieAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieAddedInput() {
    return this._onMovieAdded;
  }

  // on_movie_delete - computed: false, optional: false, required: true
  private _onMovieDelete?: boolean | cdktf.IResolvable; 
  public get onMovieDelete() {
    return this.getBooleanAttribute('on_movie_delete');
  }
  public set onMovieDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieDeleteInput() {
    return this._onMovieDelete;
  }

  // on_movie_file_delete - computed: true, optional: true, required: false
  private _onMovieFileDelete?: boolean | cdktf.IResolvable; 
  public get onMovieFileDelete() {
    return this.getBooleanAttribute('on_movie_file_delete');
  }
  public set onMovieFileDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDelete = value;
  }
  public resetOnMovieFileDelete() {
    this._onMovieFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteInput() {
    return this._onMovieFileDelete;
  }

  // on_movie_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onMovieFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_movie_file_delete_for_upgrade');
  }
  public set onMovieFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDeleteForUpgrade = value;
  }
  public resetOnMovieFileDeleteForUpgrade() {
    this._onMovieFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteForUpgradeInput() {
    return this._onMovieFileDeleteForUpgrade;
  }

  // on_upgrade - computed: true, optional: true, required: false
  private _onUpgrade?: boolean | cdktf.IResolvable; 
  public get onUpgrade() {
    return this.getBooleanAttribute('on_upgrade');
  }
  public set onUpgrade(value: boolean | cdktf.IResolvable) {
    this._onUpgrade = value;
  }
  public resetOnUpgrade() {
    this._onUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpgradeInput() {
    return this._onUpgrade;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // sound - computed: true, optional: true, required: false
  private _sound?: string; 
  public get sound() {
    return this.getStringAttribute('sound');
  }
  public set sound(value: string) {
    this._sound = value;
  }
  public resetSound() {
    this._sound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soundInput() {
    return this._sound;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_key - computed: false, optional: false, required: true
  private _userKey?: string; 
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
  public set userKey(value: string) {
    this._userKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userKeyInput() {
    return this._userKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      expire: cdktf.numberToTerraform(this._expire),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_movie_added: cdktf.booleanToTerraform(this._onMovieAdded),
      on_movie_delete: cdktf.booleanToTerraform(this._onMovieDelete),
      on_movie_file_delete: cdktf.booleanToTerraform(this._onMovieFileDelete),
      on_movie_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onMovieFileDeleteForUpgrade),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      priority: cdktf.numberToTerraform(this._priority),
      retry: cdktf.numberToTerraform(this._retry),
      sound: cdktf.stringToTerraform(this._sound),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      user_key: cdktf.stringToTerraform(this._userKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_application_update: {
        value: cdktf.booleanToHclTerraform(this._onApplicationUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_download: {
        value: cdktf.booleanToHclTerraform(this._onDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_grab: {
        value: cdktf.booleanToHclTerraform(this._onGrab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_issue: {
        value: cdktf.booleanToHclTerraform(this._onHealthIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_restored: {
        value: cdktf.booleanToHclTerraform(this._onHealthRestored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_manual_interaction_required: {
        value: cdktf.booleanToHclTerraform(this._onManualInteractionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_added: {
        value: cdktf.booleanToHclTerraform(this._onMovieAdded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDeleteForUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sound: {
        value: cdktf.stringToHclTerraform(this._sound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_key: {
        value: cdktf.stringToHclTerraform(this._userKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
