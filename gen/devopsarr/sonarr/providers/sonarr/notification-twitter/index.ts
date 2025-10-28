// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationTwitterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#access_token NotificationTwitter#access_token}
  */
  readonly accessToken: string;
  /**
  * Access token secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#access_token_secret NotificationTwitter#access_token_secret}
  */
  readonly accessTokenSecret: string;
  /**
  * Consumer Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#consumer_key NotificationTwitter#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Consumer Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#consumer_secret NotificationTwitter#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Direct message flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#direct_message NotificationTwitter#direct_message}
  */
  readonly directMessage?: boolean | cdktf.IResolvable;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#include_health_warnings NotificationTwitter#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * Mention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#mention NotificationTwitter#mention}
  */
  readonly mention: string;
  /**
  * NotificationTwitter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#name NotificationTwitter#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_application_update NotificationTwitter#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_download NotificationTwitter#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_episode_file_delete NotificationTwitter#on_episode_file_delete}
  */
  readonly onEpisodeFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_episode_file_delete_for_upgrade NotificationTwitter#on_episode_file_delete_for_upgrade}
  */
  readonly onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_grab NotificationTwitter#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_health_issue NotificationTwitter#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_health_restored NotificationTwitter#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On import complete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_import_complete NotificationTwitter#on_import_complete}
  */
  readonly onImportComplete?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_manual_interaction_required NotificationTwitter#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On series add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_series_add NotificationTwitter#on_series_add}
  */
  readonly onSeriesAdd?: boolean | cdktf.IResolvable;
  /**
  * On series delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_series_delete NotificationTwitter#on_series_delete}
  */
  readonly onSeriesDelete?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#on_upgrade NotificationTwitter#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#tags NotificationTwitter#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter sonarr_notification_twitter}
*/
export class NotificationTwitter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_notification_twitter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationTwitter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationTwitter to import
  * @param importFromId The id of the existing NotificationTwitter that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationTwitter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_notification_twitter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_twitter sonarr_notification_twitter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationTwitterConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationTwitterConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_notification_twitter',
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
    this._accessToken = config.accessToken;
    this._accessTokenSecret = config.accessTokenSecret;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._directMessage = config.directMessage;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._mention = config.mention;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onEpisodeFileDelete = config.onEpisodeFileDelete;
    this._onEpisodeFileDeleteForUpgrade = config.onEpisodeFileDeleteForUpgrade;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onImportComplete = config.onImportComplete;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onSeriesAdd = config.onSeriesAdd;
    this._onSeriesDelete = config.onSeriesDelete;
    this._onUpgrade = config.onUpgrade;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_secret - computed: false, optional: false, required: true
  private _accessTokenSecret?: string; 
  public get accessTokenSecret() {
    return this.getStringAttribute('access_token_secret');
  }
  public set accessTokenSecret(value: string) {
    this._accessTokenSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSecretInput() {
    return this._accessTokenSecret;
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // direct_message - computed: true, optional: true, required: false
  private _directMessage?: boolean | cdktf.IResolvable; 
  public get directMessage() {
    return this.getBooleanAttribute('direct_message');
  }
  public set directMessage(value: boolean | cdktf.IResolvable) {
    this._directMessage = value;
  }
  public resetDirectMessage() {
    this._directMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directMessageInput() {
    return this._directMessage;
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

  // mention - computed: false, optional: false, required: true
  private _mention?: string; 
  public get mention() {
    return this.getStringAttribute('mention');
  }
  public set mention(value: string) {
    this._mention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionInput() {
    return this._mention;
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

  // on_episode_file_delete - computed: true, optional: true, required: false
  private _onEpisodeFileDelete?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDelete() {
    return this.getBooleanAttribute('on_episode_file_delete');
  }
  public set onEpisodeFileDelete(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDelete = value;
  }
  public resetOnEpisodeFileDelete() {
    this._onEpisodeFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteInput() {
    return this._onEpisodeFileDelete;
  }

  // on_episode_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_episode_file_delete_for_upgrade');
  }
  public set onEpisodeFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDeleteForUpgrade = value;
  }
  public resetOnEpisodeFileDeleteForUpgrade() {
    this._onEpisodeFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteForUpgradeInput() {
    return this._onEpisodeFileDeleteForUpgrade;
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

  // on_import_complete - computed: true, optional: true, required: false
  private _onImportComplete?: boolean | cdktf.IResolvable; 
  public get onImportComplete() {
    return this.getBooleanAttribute('on_import_complete');
  }
  public set onImportComplete(value: boolean | cdktf.IResolvable) {
    this._onImportComplete = value;
  }
  public resetOnImportComplete() {
    this._onImportComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onImportCompleteInput() {
    return this._onImportComplete;
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

  // on_series_add - computed: true, optional: true, required: false
  private _onSeriesAdd?: boolean | cdktf.IResolvable; 
  public get onSeriesAdd() {
    return this.getBooleanAttribute('on_series_add');
  }
  public set onSeriesAdd(value: boolean | cdktf.IResolvable) {
    this._onSeriesAdd = value;
  }
  public resetOnSeriesAdd() {
    this._onSeriesAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesAddInput() {
    return this._onSeriesAdd;
  }

  // on_series_delete - computed: true, optional: true, required: false
  private _onSeriesDelete?: boolean | cdktf.IResolvable; 
  public get onSeriesDelete() {
    return this.getBooleanAttribute('on_series_delete');
  }
  public set onSeriesDelete(value: boolean | cdktf.IResolvable) {
    this._onSeriesDelete = value;
  }
  public resetOnSeriesDelete() {
    this._onSeriesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesDeleteInput() {
    return this._onSeriesDelete;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      access_token_secret: cdktf.stringToTerraform(this._accessTokenSecret),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      direct_message: cdktf.booleanToTerraform(this._directMessage),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      mention: cdktf.stringToTerraform(this._mention),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_episode_file_delete: cdktf.booleanToTerraform(this._onEpisodeFileDelete),
      on_episode_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onEpisodeFileDeleteForUpgrade),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_import_complete: cdktf.booleanToTerraform(this._onImportComplete),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_series_add: cdktf.booleanToTerraform(this._onSeriesAdd),
      on_series_delete: cdktf.booleanToTerraform(this._onSeriesDelete),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_secret: {
        value: cdktf.stringToHclTerraform(this._accessTokenSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_message: {
        value: cdktf.booleanToHclTerraform(this._directMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mention: {
        value: cdktf.stringToHclTerraform(this._mention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      on_episode_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_episode_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDeleteForUpgrade),
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
      on_import_complete: {
        value: cdktf.booleanToHclTerraform(this._onImportComplete),
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
      on_series_add: {
        value: cdktf.booleanToHclTerraform(this._onSeriesAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_delete: {
        value: cdktf.booleanToHclTerraform(this._onSeriesDelete),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
