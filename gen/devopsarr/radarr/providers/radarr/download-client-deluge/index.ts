// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientDelugeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add paused flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#add_paused DownloadClientDeluge#add_paused}
  */
  readonly addPaused?: boolean | cdktf.IResolvable;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#enable DownloadClientDeluge#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#host DownloadClientDeluge#host}
  */
  readonly host?: string;
  /**
  * Movie category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#movie_category DownloadClientDeluge#movie_category}
  */
  readonly movieCategory?: string;
  /**
  * Movie imported category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#movie_imported_category DownloadClientDeluge#movie_imported_category}
  */
  readonly movieImportedCategory?: string;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#name DownloadClientDeluge#name}
  */
  readonly name: string;
  /**
  * Older Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#older_movie_priority DownloadClientDeluge#older_movie_priority}
  */
  readonly olderMoviePriority?: number;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#password DownloadClientDeluge#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#port DownloadClientDeluge#port}
  */
  readonly port?: number;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#priority DownloadClientDeluge#priority}
  */
  readonly priority?: number;
  /**
  * Recent Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#recent_movie_priority DownloadClientDeluge#recent_movie_priority}
  */
  readonly recentMoviePriority?: number;
  /**
  * Remove completed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#remove_completed_downloads DownloadClientDeluge#remove_completed_downloads}
  */
  readonly removeCompletedDownloads?: boolean | cdktf.IResolvable;
  /**
  * Remove failed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#remove_failed_downloads DownloadClientDeluge#remove_failed_downloads}
  */
  readonly removeFailedDownloads?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#tags DownloadClientDeluge#tags}
  */
  readonly tags?: number[];
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#url_base DownloadClientDeluge#url_base}
  */
  readonly urlBase?: string;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#use_ssl DownloadClientDeluge#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge radarr_download_client_deluge}
*/
export class DownloadClientDeluge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client_deluge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientDeluge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientDeluge to import
  * @param importFromId The id of the existing DownloadClientDeluge that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientDeluge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client_deluge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_deluge radarr_download_client_deluge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientDelugeConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientDelugeConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client_deluge',
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
    this._addPaused = config.addPaused;
    this._enable = config.enable;
    this._host = config.host;
    this._movieCategory = config.movieCategory;
    this._movieImportedCategory = config.movieImportedCategory;
    this._name = config.name;
    this._olderMoviePriority = config.olderMoviePriority;
    this._password = config.password;
    this._port = config.port;
    this._priority = config.priority;
    this._recentMoviePriority = config.recentMoviePriority;
    this._removeCompletedDownloads = config.removeCompletedDownloads;
    this._removeFailedDownloads = config.removeFailedDownloads;
    this._tags = config.tags;
    this._urlBase = config.urlBase;
    this._useSsl = config.useSsl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paused - computed: true, optional: true, required: false
  private _addPaused?: boolean | cdktf.IResolvable; 
  public get addPaused() {
    return this.getBooleanAttribute('add_paused');
  }
  public set addPaused(value: boolean | cdktf.IResolvable) {
    this._addPaused = value;
  }
  public resetAddPaused() {
    this._addPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPausedInput() {
    return this._addPaused;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // movie_category - computed: true, optional: true, required: false
  private _movieCategory?: string; 
  public get movieCategory() {
    return this.getStringAttribute('movie_category');
  }
  public set movieCategory(value: string) {
    this._movieCategory = value;
  }
  public resetMovieCategory() {
    this._movieCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieCategoryInput() {
    return this._movieCategory;
  }

  // movie_imported_category - computed: true, optional: true, required: false
  private _movieImportedCategory?: string; 
  public get movieImportedCategory() {
    return this.getStringAttribute('movie_imported_category');
  }
  public set movieImportedCategory(value: string) {
    this._movieImportedCategory = value;
  }
  public resetMovieImportedCategory() {
    this._movieImportedCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieImportedCategoryInput() {
    return this._movieImportedCategory;
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

  // older_movie_priority - computed: true, optional: true, required: false
  private _olderMoviePriority?: number; 
  public get olderMoviePriority() {
    return this.getNumberAttribute('older_movie_priority');
  }
  public set olderMoviePriority(value: number) {
    this._olderMoviePriority = value;
  }
  public resetOlderMoviePriority() {
    this._olderMoviePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderMoviePriorityInput() {
    return this._olderMoviePriority;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // recent_movie_priority - computed: true, optional: true, required: false
  private _recentMoviePriority?: number; 
  public get recentMoviePriority() {
    return this.getNumberAttribute('recent_movie_priority');
  }
  public set recentMoviePriority(value: number) {
    this._recentMoviePriority = value;
  }
  public resetRecentMoviePriority() {
    this._recentMoviePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentMoviePriorityInput() {
    return this._recentMoviePriority;
  }

  // remove_completed_downloads - computed: true, optional: true, required: false
  private _removeCompletedDownloads?: boolean | cdktf.IResolvable; 
  public get removeCompletedDownloads() {
    return this.getBooleanAttribute('remove_completed_downloads');
  }
  public set removeCompletedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeCompletedDownloads = value;
  }
  public resetRemoveCompletedDownloads() {
    this._removeCompletedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCompletedDownloadsInput() {
    return this._removeCompletedDownloads;
  }

  // remove_failed_downloads - computed: true, optional: true, required: false
  private _removeFailedDownloads?: boolean | cdktf.IResolvable; 
  public get removeFailedDownloads() {
    return this.getBooleanAttribute('remove_failed_downloads');
  }
  public set removeFailedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeFailedDownloads = value;
  }
  public resetRemoveFailedDownloads() {
    this._removeFailedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFailedDownloadsInput() {
    return this._removeFailedDownloads;
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

  // url_base - computed: true, optional: true, required: false
  private _urlBase?: string; 
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }
  public set urlBase(value: string) {
    this._urlBase = value;
  }
  public resetUrlBase() {
    this._urlBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBaseInput() {
    return this._urlBase;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_paused: cdktf.booleanToTerraform(this._addPaused),
      enable: cdktf.booleanToTerraform(this._enable),
      host: cdktf.stringToTerraform(this._host),
      movie_category: cdktf.stringToTerraform(this._movieCategory),
      movie_imported_category: cdktf.stringToTerraform(this._movieImportedCategory),
      name: cdktf.stringToTerraform(this._name),
      older_movie_priority: cdktf.numberToTerraform(this._olderMoviePriority),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      recent_movie_priority: cdktf.numberToTerraform(this._recentMoviePriority),
      remove_completed_downloads: cdktf.booleanToTerraform(this._removeCompletedDownloads),
      remove_failed_downloads: cdktf.booleanToTerraform(this._removeFailedDownloads),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      url_base: cdktf.stringToTerraform(this._urlBase),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paused: {
        value: cdktf.booleanToHclTerraform(this._addPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_category: {
        value: cdktf.stringToHclTerraform(this._movieCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_imported_category: {
        value: cdktf.stringToHclTerraform(this._movieImportedCategory),
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
      older_movie_priority: {
        value: cdktf.numberToHclTerraform(this._olderMoviePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recent_movie_priority: {
        value: cdktf.numberToHclTerraform(this._recentMoviePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_completed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeCompletedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_failed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeFailedDownloads),
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
      url_base: {
        value: cdktf.stringToHclTerraform(this._urlBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
