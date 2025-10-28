// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerFilelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anime categories list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#anime_categories IndexerFilelist#anime_categories}
  */
  readonly animeCategories?: number[];
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#base_url IndexerFilelist#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Categories list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#categories IndexerFilelist#categories}
  */
  readonly categories?: number[];
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#download_client_id IndexerFilelist#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#enable_automatic_search IndexerFilelist#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#enable_interactive_search IndexerFilelist#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#enable_rss IndexerFilelist#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Minimum seeders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#minimum_seeders IndexerFilelist#minimum_seeders}
  */
  readonly minimumSeeders?: number;
  /**
  * IndexerFilelist name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#name IndexerFilelist#name}
  */
  readonly name: string;
  /**
  * Passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#passkey IndexerFilelist#passkey}
  */
  readonly passkey: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#priority IndexerFilelist#priority}
  */
  readonly priority?: number;
  /**
  * Season seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#season_pack_seed_time IndexerFilelist#season_pack_seed_time}
  */
  readonly seasonPackSeedTime?: number;
  /**
  * Seed ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#seed_ratio IndexerFilelist#seed_ratio}
  */
  readonly seedRatio?: number;
  /**
  * Seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#seed_time IndexerFilelist#seed_time}
  */
  readonly seedTime?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#tags IndexerFilelist#tags}
  */
  readonly tags?: number[];
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#username IndexerFilelist#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist sonarr_indexer_filelist}
*/
export class IndexerFilelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer_filelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerFilelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerFilelist to import
  * @param importFromId The id of the existing IndexerFilelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerFilelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer_filelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_filelist sonarr_indexer_filelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerFilelistConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerFilelistConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer_filelist',
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
    this._animeCategories = config.animeCategories;
    this._baseUrl = config.baseUrl;
    this._categories = config.categories;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
    this._enableRss = config.enableRss;
    this._minimumSeeders = config.minimumSeeders;
    this._name = config.name;
    this._passkey = config.passkey;
    this._priority = config.priority;
    this._seasonPackSeedTime = config.seasonPackSeedTime;
    this._seedRatio = config.seedRatio;
    this._seedTime = config.seedTime;
    this._tags = config.tags;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anime_categories - computed: true, optional: true, required: false
  private _animeCategories?: number[]; 
  public get animeCategories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('anime_categories')));
  }
  public set animeCategories(value: number[]) {
    this._animeCategories = value;
  }
  public resetAnimeCategories() {
    this._animeCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animeCategoriesInput() {
    return this._animeCategories;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: number[]; 
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }
  public set categories(value: number[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // download_client_id - computed: true, optional: true, required: false
  private _downloadClientId?: number; 
  public get downloadClientId() {
    return this.getNumberAttribute('download_client_id');
  }
  public set downloadClientId(value: number) {
    this._downloadClientId = value;
  }
  public resetDownloadClientId() {
    this._downloadClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadClientIdInput() {
    return this._downloadClientId;
  }

  // enable_automatic_search - computed: true, optional: true, required: false
  private _enableAutomaticSearch?: boolean | cdktf.IResolvable; 
  public get enableAutomaticSearch() {
    return this.getBooleanAttribute('enable_automatic_search');
  }
  public set enableAutomaticSearch(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticSearch = value;
  }
  public resetEnableAutomaticSearch() {
    this._enableAutomaticSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticSearchInput() {
    return this._enableAutomaticSearch;
  }

  // enable_interactive_search - computed: true, optional: true, required: false
  private _enableInteractiveSearch?: boolean | cdktf.IResolvable; 
  public get enableInteractiveSearch() {
    return this.getBooleanAttribute('enable_interactive_search');
  }
  public set enableInteractiveSearch(value: boolean | cdktf.IResolvable) {
    this._enableInteractiveSearch = value;
  }
  public resetEnableInteractiveSearch() {
    this._enableInteractiveSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractiveSearchInput() {
    return this._enableInteractiveSearch;
  }

  // enable_rss - computed: true, optional: true, required: false
  private _enableRss?: boolean | cdktf.IResolvable; 
  public get enableRss() {
    return this.getBooleanAttribute('enable_rss');
  }
  public set enableRss(value: boolean | cdktf.IResolvable) {
    this._enableRss = value;
  }
  public resetEnableRss() {
    this._enableRss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRssInput() {
    return this._enableRss;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_seeders - computed: true, optional: true, required: false
  private _minimumSeeders?: number; 
  public get minimumSeeders() {
    return this.getNumberAttribute('minimum_seeders');
  }
  public set minimumSeeders(value: number) {
    this._minimumSeeders = value;
  }
  public resetMinimumSeeders() {
    this._minimumSeeders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSeedersInput() {
    return this._minimumSeeders;
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

  // passkey - computed: false, optional: false, required: true
  private _passkey?: string; 
  public get passkey() {
    return this.getStringAttribute('passkey');
  }
  public set passkey(value: string) {
    this._passkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passkeyInput() {
    return this._passkey;
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

  // season_pack_seed_time - computed: true, optional: true, required: false
  private _seasonPackSeedTime?: number; 
  public get seasonPackSeedTime() {
    return this.getNumberAttribute('season_pack_seed_time');
  }
  public set seasonPackSeedTime(value: number) {
    this._seasonPackSeedTime = value;
  }
  public resetSeasonPackSeedTime() {
    this._seasonPackSeedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonPackSeedTimeInput() {
    return this._seasonPackSeedTime;
  }

  // seed_ratio - computed: true, optional: true, required: false
  private _seedRatio?: number; 
  public get seedRatio() {
    return this.getNumberAttribute('seed_ratio');
  }
  public set seedRatio(value: number) {
    this._seedRatio = value;
  }
  public resetSeedRatio() {
    this._seedRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedRatioInput() {
    return this._seedRatio;
  }

  // seed_time - computed: true, optional: true, required: false
  private _seedTime?: number; 
  public get seedTime() {
    return this.getNumberAttribute('seed_time');
  }
  public set seedTime(value: number) {
    this._seedTime = value;
  }
  public resetSeedTime() {
    this._seedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedTimeInput() {
    return this._seedTime;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anime_categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._animeCategories),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._categories),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      minimum_seeders: cdktf.numberToTerraform(this._minimumSeeders),
      name: cdktf.stringToTerraform(this._name),
      passkey: cdktf.stringToTerraform(this._passkey),
      priority: cdktf.numberToTerraform(this._priority),
      season_pack_seed_time: cdktf.numberToTerraform(this._seasonPackSeedTime),
      seed_ratio: cdktf.numberToTerraform(this._seedRatio),
      seed_time: cdktf.numberToTerraform(this._seedTime),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anime_categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._animeCategories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      download_client_id: {
        value: cdktf.numberToHclTerraform(this._downloadClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_automatic_search: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_interactive_search: {
        value: cdktf.booleanToHclTerraform(this._enableInteractiveSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rss: {
        value: cdktf.booleanToHclTerraform(this._enableRss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_seeders: {
        value: cdktf.numberToHclTerraform(this._minimumSeeders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passkey: {
        value: cdktf.stringToHclTerraform(this._passkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      season_pack_seed_time: {
        value: cdktf.numberToHclTerraform(this._seasonPackSeedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seed_ratio: {
        value: cdktf.numberToHclTerraform(this._seedRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seed_time: {
        value: cdktf.numberToHclTerraform(this._seedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
