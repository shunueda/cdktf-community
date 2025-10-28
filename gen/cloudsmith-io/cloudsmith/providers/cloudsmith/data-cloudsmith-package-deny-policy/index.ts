// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudsmithPackageDenyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the package deny policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#description DataCloudsmithPackageDenyPolicy#description}
  */
  readonly description?: string;
  /**
  * Is the package deny policy enabled?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#enabled DataCloudsmithPackageDenyPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#id DataCloudsmithPackageDenyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A descriptive name for the package deny policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#name DataCloudsmithPackageDenyPolicy#name}
  */
  readonly name?: string;
  /**
  * Namespace to which this package deny policy belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#namespace DataCloudsmithPackageDenyPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * The query to match the packages to be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#package_query DataCloudsmithPackageDenyPolicy#package_query}
  */
  readonly packageQuery?: string;
  /**
  * Identifier of the package deny policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#slug_perm DataCloudsmithPackageDenyPolicy#slug_perm}
  */
  readonly slugPerm: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy cloudsmith_package_deny_policy}
*/
export class DataCloudsmithPackageDenyPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_package_deny_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudsmithPackageDenyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudsmithPackageDenyPolicy to import
  * @param importFromId The id of the existing DataCloudsmithPackageDenyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudsmithPackageDenyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_package_deny_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.65/docs/data-sources/package_deny_policy cloudsmith_package_deny_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudsmithPackageDenyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudsmithPackageDenyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_package_deny_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._packageQuery = config.packageQuery;
    this._slugPerm = config.slugPerm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // package_query - computed: false, optional: true, required: false
  private _packageQuery?: string; 
  public get packageQuery() {
    return this.getStringAttribute('package_query');
  }
  public set packageQuery(value: string) {
    this._packageQuery = value;
  }
  public resetPackageQuery() {
    this._packageQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageQueryInput() {
    return this._packageQuery;
  }

  // slug_perm - computed: false, optional: false, required: true
  private _slugPerm?: string; 
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }
  public set slugPerm(value: string) {
    this._slugPerm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugPermInput() {
    return this._slugPerm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      package_query: cdktf.stringToTerraform(this._packageQuery),
      slug_perm: cdktf.stringToTerraform(this._slugPerm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_query: {
        value: cdktf.stringToHclTerraform(this._packageQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug_perm: {
        value: cdktf.stringToHclTerraform(this._slugPerm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
