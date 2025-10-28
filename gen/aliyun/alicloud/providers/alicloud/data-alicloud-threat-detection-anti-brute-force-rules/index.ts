// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudThreatDetectionAntiBruteForceRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules#id DataAlicloudThreatDetectionAntiBruteForceRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules#ids DataAlicloudThreatDetectionAntiBruteForceRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules#name_regex DataAlicloudThreatDetectionAntiBruteForceRules#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules#output_file DataAlicloudThreatDetectionAntiBruteForceRules#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudThreatDetectionAntiBruteForceRulesRules {
}

export function dataAlicloudThreatDetectionAntiBruteForceRulesRulesToTerraform(struct?: DataAlicloudThreatDetectionAntiBruteForceRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionAntiBruteForceRulesRulesToHclTerraform(struct?: DataAlicloudThreatDetectionAntiBruteForceRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionAntiBruteForceRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionAntiBruteForceRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionAntiBruteForceRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_brute_force_rule_id - computed: true, optional: false, required: false
  public get antiBruteForceRuleId() {
    return this.getStringAttribute('anti_brute_force_rule_id');
  }

  // anti_brute_force_rule_name - computed: true, optional: false, required: false
  public get antiBruteForceRuleName() {
    return this.getStringAttribute('anti_brute_force_rule_name');
  }

  // default_rule - computed: true, optional: false, required: false
  public get defaultRule() {
    return this.getBooleanAttribute('default_rule');
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // forbidden_time - computed: true, optional: false, required: false
  public get forbiddenTime() {
    return this.getNumberAttribute('forbidden_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // span - computed: true, optional: false, required: false
  public get span() {
    return this.getNumberAttribute('span');
  }

  // uuid_list - computed: true, optional: false, required: false
  public get uuidList() {
    return this.getListAttribute('uuid_list');
  }
}

export class DataAlicloudThreatDetectionAntiBruteForceRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionAntiBruteForceRulesRulesOutputReference {
    return new DataAlicloudThreatDetectionAntiBruteForceRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules alicloud_threat_detection_anti_brute_force_rules}
*/
export class DataAlicloudThreatDetectionAntiBruteForceRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_anti_brute_force_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudThreatDetectionAntiBruteForceRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudThreatDetectionAntiBruteForceRules to import
  * @param importFromId The id of the existing DataAlicloudThreatDetectionAntiBruteForceRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudThreatDetectionAntiBruteForceRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_anti_brute_force_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/threat_detection_anti_brute_force_rules alicloud_threat_detection_anti_brute_force_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudThreatDetectionAntiBruteForceRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudThreatDetectionAntiBruteForceRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_anti_brute_force_rules',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAlicloudThreatDetectionAntiBruteForceRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
