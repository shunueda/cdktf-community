// https://registry.terraform.io/providers/files-com/files/0.1.365/docs/data-sources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * API Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.365/docs/data-sources/api_key#id DataFilesApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.365/docs/data-sources/api_key files_api_key}
*/
export class DataFilesApiKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesApiKey to import
  * @param importFromId The id of the existing DataFilesApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.365/docs/data-sources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.365/docs/data-sources/api_key files_api_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_api_key',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.365'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }

  // aws_style_credentials - computed: true, optional: false, required: false
  public get awsStyleCredentials() {
    return this.getBooleanAttribute('aws_style_credentials');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // descriptive_label - computed: true, optional: false, required: false
  public get descriptiveLabel() {
    return this.getStringAttribute('descriptive_label');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_use_at - computed: true, optional: false, required: false
  public get lastUseAt() {
    return this.getStringAttribute('last_use_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permission_set - computed: true, optional: false, required: false
  public get permissionSet() {
    return this.getStringAttribute('permission_set');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
