// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_wlantemplates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgWlantemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_wlantemplates#org_id DataMistOrgWlantemplates#org_id}
  */
  readonly orgId: string;
}
export interface DataMistOrgWlantemplatesOrgWlantemplates {
}

export function dataMistOrgWlantemplatesOrgWlantemplatesToTerraform(struct?: DataMistOrgWlantemplatesOrgWlantemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgWlantemplatesOrgWlantemplatesToHclTerraform(struct?: DataMistOrgWlantemplatesOrgWlantemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgWlantemplatesOrgWlantemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMistOrgWlantemplatesOrgWlantemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgWlantemplatesOrgWlantemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
}

export class DataMistOrgWlantemplatesOrgWlantemplatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistOrgWlantemplatesOrgWlantemplatesOutputReference {
    return new DataMistOrgWlantemplatesOrgWlantemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_wlantemplates mist_org_wlantemplates}
*/
export class DataMistOrgWlantemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_wlantemplates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgWlantemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgWlantemplates to import
  * @param importFromId The id of the existing DataMistOrgWlantemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_wlantemplates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgWlantemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_wlantemplates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_wlantemplates mist_org_wlantemplates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgWlantemplatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgWlantemplatesConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_wlantemplates',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_wlantemplates - computed: true, optional: false, required: false
  private _orgWlantemplates = new DataMistOrgWlantemplatesOrgWlantemplatesList(this, "org_wlantemplates", true);
  public get orgWlantemplates() {
    return this._orgWlantemplates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
