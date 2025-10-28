// https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKestraNamespaceFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filename to the namespace file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file#filename DataKestraNamespaceFile#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file#id DataKestraNamespaceFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace of the namespace file resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file#namespace DataKestraNamespaceFile#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file kestra_namespace_file}
*/
export class DataKestraNamespaceFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_namespace_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKestraNamespaceFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKestraNamespaceFile to import
  * @param importFromId The id of the existing DataKestraNamespaceFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKestraNamespaceFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_namespace_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/namespace_file kestra_namespace_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKestraNamespaceFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataKestraNamespaceFileConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_namespace_file',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filename = config.filename;
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
